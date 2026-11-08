"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const read = (name) => fs.readFileSync(path.join(root, name), "utf8");

test("la navegación principal enlaza la ruta de consultas SICOIN", () => {
  const index = read("index.html");
  assert.match(
    index,
    /\["Consultas y reportería SICOIN","ruta-sicoin-consultas"\]/,
    "Falta la opción de SICOIN en el menú Aprendizaje"
  );
  assert.match(
    index,
    /"ruta-sicoin-consultas":"Consultas y reportería SICOIN"/,
    "Falta el nombre accesible de la sección"
  );
  assert.match(
    index,
    /"ruta-sicoin-consultas":\(\)=>/,
    "La ruta del menú no tiene una vista asociada"
  );
  assert.match(
    index,
    /href="ruta-consultas-sicoin\.html"/,
    "La vista introductoria no enlaza al curso"
  );
});

test("la ruta SICOIN conserva sus tres etapas y autoevaluación", () => {
  const html = read("ruta-consultas-sicoin.html");
  assert.match(html, /<html lang="es">/);
  assert.equal((html.match(/<article class="card">/g) || []).length, 3);
  assert.equal((html.match(/<details><summary>/g) || []).length, 3);
  assert.match(html, /No ingreses credenciales ni información privada/);
});

test("la ruta SICOIN está incluida en la caché sin conexión", () => {
  const sw = read("sw.js");
  assert.match(sw, /'\.\/ruta-consultas-sicoin\.html'/);
  assert.match(sw, /const CACHE='centro-presupuestario-v19'/);
});

test("los recursos de formación enlazan a dominios institucionales esperados", () => {
  const html = read("ruta-consultas-sicoin.html");
  assert.match(html, /https:\/\/formacion\.minfin\.gob\.gt\//);
  assert.match(html, /https:\/\/www\.minfin\.gob\.gt\//);
  assert.match(html, /ACUERDO%20MINISTERIAL%20681-2023/);
});



test("la ruta ofrece enlace directo a la cápsula específica de reportería SICOIN", () => {
  const html = read("ruta-consultas-sicoin.html");
  const expected = '<a href="https://formacion.minfin.gob.gt/creacion-de-un-reporte-en-el-sistema-de-contabilidad-integrada-sicoin/" target="_blank" rel="noopener noreferrer">';
  assert.ok(html.includes(expected), "Falta el enlace directo y seguro a la cápsula oficial de reportes SICOIN");
});

test("los enlaces externos de la ruta SICOIN usan HTTPS y apertura segura", () => {
  const html = read("ruta-consultas-sicoin.html");
  const anchors = [...html.matchAll(/<a[^>]+href="https:\/\/[^"]+"[^>]*>/g)]
    .map((match) => match[0]);
  assert.ok(anchors.length >= 3, "Se esperaban los enlaces oficiales de formación y manuales");
  for (const anchor of anchors) {
    assert.match(anchor, /target="_blank"/, "Todo enlace externo debe abrir en una pestaña nueva");
    assert.match(anchor, /rel="noopener noreferrer"/, "Todo enlace externo debe incluir protección rel");
  }
});
