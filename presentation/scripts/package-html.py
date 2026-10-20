#!/usr/bin/env python3
"""Package the built keynote as a single offline HTML without changing index.html."""
from pathlib import Path
import base64
import hashlib
import json
import re

root = Path(__file__).resolve().parents[1]
dist = root / 'dist'
html = (dist / 'index.html').read_text()
js_files = list((dist / 'assets').glob('index-*.js'))
css_files = list((dist / 'assets').glob('index-*.css'))
if len(js_files) != 1 or len(css_files) != 1:
    raise SystemExit('Expected one JS and one CSS bundle. Run npm run build first.')
js = js_files[0].read_text()
css = css_files[0].read_text()
assets = []
for f in sorted((dist / 'assets').glob('*.jpg')):
    data = 'data:image/jpeg;base64,' + base64.b64encode(f.read_bytes()).decode()
    key = '/assets/' + f.name
    if key not in js:
        raise SystemExit(f'Unreferenced built asset: {f.name}')
    js = js.replace(key, data)
    assets.append({'name': f.name, 'sha256': hashlib.sha256(f.read_bytes()).hexdigest()})
if re.search(r'[\"\']/assets/', js) or '@import' in css:
    raise SystemExit('An external asset reference remains.')
js = js.replace('</script', '<\\/script')
html = re.sub(r'<script type="module"[^>]*src="[^"]+"[^>]*></script>', lambda _: '<script type="module">'+js+'</script>', html)
html = re.sub(r'<link rel="stylesheet"[^>]+>', lambda _: '<style>'+css+'</style>', html)
prototype_sha = hashlib.sha256((root.parent / 'index.html').read_bytes()).hexdigest()
html = html.replace('</head>', f'<meta name="prd-revision" content="934"/><meta name="prototype-source-sha256" content="{prototype_sha}"/></head>')
# One inline script and no remote resources: the desktop file works offline.
if 'src="/assets/' in html or 'href="/assets/' in html:
    raise SystemExit('A build asset link remains.')
out = root.parent / 'launch.html'
out.write_text(html)
result = {'path':str(out),'bytes':out.stat().st_size,'sha256':hashlib.sha256(out.read_bytes()).hexdigest(),'embedded_prototype_runtime':1,'assets':assets}
(root/'dist'/'package-manifest.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in result.items() if k!='assets'},ensure_ascii=False,indent=2))
