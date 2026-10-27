// Restore the pinned public export without transferring large binary payloads through chat.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {brotliDecompressSync} from 'node:zlib';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'upstream-web-build.json')));
const target = path.join(root, 'android/app/src/main/assets/game');
const valid = (file, data) => data.length === file.size && crypto.createHash('sha256').update(data).digest('hex') === file.sha256;
const needed = manifest.files.filter(file => {
  const output = path.join(target, file.file);
  return !fs.existsSync(output) || !valid(file, fs.readFileSync(output));
});
if (needed.length) {
const frameUrl = `https://play-prod.struckd.com/api/v1/games/game/${manifest.gameId}/build/${manifest.buildId}/frame`;
const response = await fetch(frameUrl, {signal: AbortSignal.timeout(60000)});
if (!response.ok) throw new Error(`Pinned build frame: HTTP ${response.status}`);
const frame = await response.text();
const urls = [...new Set(frame.match(/https:\/\/cdn\.play\.unity\.com\/[^"\s]+/g) || [])];
for (const file of needed) {
  const output = path.join(target, file.file);
  const url = urls.find(url => url.split('?')[0] === file.source);
  if (!url) throw new Error(`Pinned asset absent: ${file.file}`);
  const result = await fetch(url, {signal: AbortSignal.timeout(120000)});
  if (!result.ok) throw new Error(`${file.file}: HTTP ${result.status}`);
  let data = Buffer.from(await result.arrayBuffer());
  // Fetch decodes HTTP content-encoding itself; Unity also sometimes serves raw .br bytes.
  if (!valid(file, data) && file.source.endsWith('.br')) data = brotliDecompressSync(data);
  if (!valid(file, data)) throw new Error(`Checksum mismatch: ${file.file}`);
  fs.mkdirSync(path.dirname(output), {recursive:true});
  fs.writeFileSync(output, data);
  console.log(`Verified ${file.file}: ${data.length} bytes`);
}
} else {
  console.log('All pinned game files verified locally; no upstream request needed.');
}
