// Regression: a complete, valid checkout must not contact Unity Play to rebuild.
globalThis.fetch = () => { throw new Error('Unexpected upstream request with all game files present'); };
await import('./fetch_web_build.mjs');
console.log('PASS: complete export can be restored with upstream network unavailable.');
