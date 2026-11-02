"use strict";
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const html = fs.readFileSync(path.join(__dirname, "..", "ruta-guatecompras.html"), "utf8");

test("conserva nueve recursos oficiales y cinco opciones de filtro", () => {
  assert.equal((html.match(/class="card" data-topic="/g) || []).length, 9);
  assert.equal((html.match(/data-filter="/g) || []).length, 5);
  const topics = [...html.matchAll(/class="card" data-topic="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(
    Object.fromEntries(["Inicio", "Planificación", "Publicaciones", "Control"].map(
      topic => [topic, topics.filter(t => t === topic).length]
    )),
    { Inicio: 2, "Planificación": 1, Publicaciones: 5, Control: 1 }
  );
});

test("autoevaluación contiene cuatro preguntas y respuestas desplegables", () => {
  assert.equal((html.match(/id="autoevaluacion"/g) || []).length, 1);
  assert.equal((html.match(/<details><summary>/g) || []).length, 4);
  assert.equal((html.match(/<\/details>/g) || []).length, 4);
  assert.match(html, /Preguntas redactadas por esta academia, no por MINFIN/);
});

test("mantiene fuentes oficiales y advertencia de no autorización", () => {
  assert.match(html, /formacion\.minfin\.gob\.gt\/coleccion-videotutoriales\//);
  assert.match(html, /material formativo, no autorización para operar/);
  assert.match(html, /no otorga certificación/);
});

test("JavaScript embebido mantiene sintaxis válida", () => {
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1);
  assert.doesNotThrow(() => new Function(scripts[0][1]));
});
