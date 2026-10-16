"""Sync the verified published plan to the user's desktop."""

import hashlib
import json
import os
from pathlib import Path
import subprocess
import tempfile
import time
import urllib.request


ROOT = Path(__file__).resolve().parents[1]
SITE = "https://zhulijin1991.github.io/chengyimai-30day-sales-plan/"
DESTINATION = Path.home() / "Desktop" / "诚意卖·30日销售推进方案.html"


def fetch(name, revision):
    request = urllib.request.Request(
        SITE + name + "?sync=" + revision,
        headers={"Cache-Control": "no-cache"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def main():
    commit = subprocess.check_output(
        ["git", "rev-parse", "HEAD"], cwd=ROOT, text=True
    ).strip()
    manifest = json.loads(fetch("deployment.json", str(time.time_ns())))
    if manifest["commit"] != commit:
        raise SystemExit("线上发布尚未更新到当前提交，未修改桌面文件。")

    published = fetch("index.html", commit)
    digest = hashlib.sha256(published).hexdigest()
    if digest != manifest["index_sha256"]:
        raise SystemExit("线上页面校验失败，未修改桌面文件。")
    if published != (ROOT / "index.html").read_bytes():
        raise SystemExit("线上页面与仓库源文件不同，未修改桌面文件。")

    changed = not DESTINATION.exists() or DESTINATION.read_bytes() != published
    if changed:
        with tempfile.NamedTemporaryFile(
            dir=DESTINATION.parent, prefix=".chengyimai-plan-", delete=False
        ) as output:
            temporary = Path(output.name)
            output.write(published)
        try:
            os.replace(temporary, DESTINATION)
        finally:
            temporary.unlink(missing_ok=True)

    if DESTINATION.read_bytes() != published:
        raise SystemExit("桌面文件写入校验失败。")
    print(json.dumps({
        "desktop": str(DESTINATION),
        "commit": commit,
        "sha256": digest,
        "bytes": len(published),
        "updated": changed,
        "online_repository_desktop_identical": True,
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
