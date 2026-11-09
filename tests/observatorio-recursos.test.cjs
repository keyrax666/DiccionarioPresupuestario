"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const observatorio = fs.readFileSync(path.join(root, "observatorio-normativo.html"), "utf8");
const actualidad = fs.readFileSync(path.join(root, "actualidad.js"), "utf8");

test("el observatorio identifica la fecha de revisión y la nueva documentación de GUATECOMPRAS", () => {
  assert.match(observatorio, /Última revisión editorial: 9 de noviembre de 2026/);
  assert.match(observatorio, /GUIA-004-2026/);
  assert.match(observatorio, /GUIAS-005 y 006-2026/);
  assert.match(observatorio, /GUIA-007-2026/);
  assert.match(observatorio, /Circular DIGAE 001-2026/);
  assert.match(observatorio, /www\.guatecompras\.gt\/info\/legislacion\.aspx/);
});

test("el observatorio limita expresamente lo que se afirma sobre los PDF de GUATECOMPRAS", () => {
  assert.match(observatorio, /no se pudo abrir la página ni revisar el contenido íntegro de los PDF/);
  assert.match(observatorio, /No se infiere de estos títulos una obligación/);
});

test("el catálogo CGC se presenta como fuente institucional y no como procedimiento universal", () => {
  assert.match(observatorio, /Manual de Organización y Funciones de la CGC A-086-2026/);
  assert.match(observatorio, /A-078-2026/);
  assert.match(observatorio, /no deben extrapolarse como procedimientos obligatorios/);
  assert.match(observatorio, /fecha de aprobación, contenido íntegro, vigencia y alcance jurídico quedan pendientes/);
});

test("la actualidad contiene las dos referencias y enlaza a fuentes oficiales", () => {
  assert.match(actualidad, /GUIA-007-2026/);
  assert.match(actualidad, /A-086-2026/);
  assert.match(actualidad, /https:\/\/www\.guatecompras\.gt\/info\/legislacion\.aspx/);
  assert.match(actualidad, /https:\/\/www\.contraloria\.gob\.gt\/index\.php\/06-manuales-de-procedimientos\//);
});
