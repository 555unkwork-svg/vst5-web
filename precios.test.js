// node precios.test.js
const assert = require('assert'), { ars, armarCarrito } = require('./precios'), cfg = require('./productos.json');
assert.strictEqual(ars(19, cfg), 18000);   // 19 × 1580 × 0,6 = 18.012
assert.strictEqual(ars(24, cfg), 23000);   // 22.752
assert.strictEqual(ars(49, cfg), 46500);   // 46.452
assert.deepStrictEqual(armarCarrito(['clip5', 'clip5', 'nada', 'drum5'], cfg).map(i => i.id), ['clip5']);
assert.deepStrictEqual(armarCarrito(['clip5', 'pack', 'sampler5'], cfg).map(i => i.id), ['pack']);
assert.deepStrictEqual(armarCarrito('basura', cfg), []);
console.log('precios: ok');
