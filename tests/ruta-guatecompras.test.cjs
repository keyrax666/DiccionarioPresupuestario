// Prueba sin dependencias: node tests/ruta-guatecompras.test.cjs
// Verifica que los filtros no oculten todos los recursos por falta de categoría.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const html = fs.readFileSync(path.join(__dirname, '..', 'ruta-guatecompras.html'), 'utf8');
const cards = [...html.matchAll(/<article\s+class="card"\s+data-topic="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)];
const expected = { Inicio: 2, 'Planificación': 1, Publicaciones: 5, Control: 1 };
assert.equal(cards.length, 9, 'Deben existir nueve recursos educativos');

for (const [category, count] of Object.entries(expected)) {
  const actual = cards.filter(card => card[1] === category).length;
  assert.equal(actual, count, 'Cantidad incorrecta en el filtro: ' + category);
  assert.ok(html.includes('data-filter="' + category + '"'), 'Falta botón: ' + category);
}
assert.ok(html.includes('data-filter="Todos"'), 'Falta filtro general');
assert.ok(!html.includes('data-topic="undefined"'), 'Hay recursos sin categoría');
const urls = cards.map(card => {
  const match = card[2].match(/href="(https:\/\/formacion\.minfin\.gob\.gt\/[^"]+)"/);
  assert.ok(match, 'Falta URL oficial de formación en una tarjeta');
  return match[1];
});
assert.equal(new Set(urls).size, 9, 'Hay recursos duplicados');
console.log('OK: nueve recursos, cuatro filtros operativos y enlaces oficiales únicos.');
