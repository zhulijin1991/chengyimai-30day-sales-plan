#!/usr/bin/env python3
"""Refresh the report's embedded prototype from a checked mobile-app build.

This preserves report sizing, animation styles and its isolated storage shim.
It intentionally leaves the canonical PRD index.html untouched.
"""
from pathlib import Path
import argparse
import base64
import mimetypes
import re

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('dist', type=Path, help='Mobile prototype dist/client directory')
args = parser.parse_args()
dist = args.dist.resolve()
target = Path(__file__).resolve().parents[1] / 'src/prototypes/base.html'

def bundle(extension):
    files = list((dist / 'assets').glob('index-*.' + extension))
    if len(files) != 1:
        raise SystemExit(f'Expected one {extension} bundle, got {len(files)}')
    return files[0].read_text()

def asset(match):
    path = dist / match.group(0).lstrip('/')
    if not path.is_file():
        raise SystemExit(f'Missing asset: {path}')
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    return 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode()

pattern = r'/assets/[A-Za-z0-9_./-]+\.(?:png|svg|jpe?g|webp|woff2?)'
js = re.sub(r'(?m)[ \t]+$', '', re.sub(pattern, asset, bundle('js'))).replace('</script', '<\\/script')
css = re.sub(r'(?m)[ \t]+$', '', re.sub(pattern, asset, bundle('css')))
if re.search(pattern, js + css):
    raise SystemExit('Unresolved prototype asset')
old = target.read_text()
module_pattern = r'<script type="module">.*?</script>'
style_pattern = r'<style>.*?</style>'
if len(re.findall(module_pattern, old, re.S)) != 1:
    raise SystemExit('Expected one embedded prototype module')
new = re.sub(module_pattern, lambda _: '<script type="module">' + js + '</script>', old, count=1, flags=re.S)
new = re.sub(style_pattern, lambda _: '<style>' + css + '</style>', new, count=1, flags=re.S)

def surrounding(document):
    document = re.sub(module_pattern, '<MODULE>', document, count=1, flags=re.S)
    return re.sub(style_pattern, '<STYLE>', document, count=1, flags=re.S)

if surrounding(old) != surrounding(new):
    raise SystemExit('Report chrome or isolated storage shim changed unexpectedly')
target.write_text(new)
print(f'Updated {target} ({len(new.encode()):,} bytes); PRD index.html unchanged.')
