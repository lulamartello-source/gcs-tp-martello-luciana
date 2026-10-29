
const assert = require("assert");
const { validarTelefono } = require("../src/script.js");

// Prueba 1: teléfono con números
assert.strictEqual(validarTelefono("2804556677"), true);

// Prueba 2: teléfono con letras
assert.strictEqual(validarTelefono("280ABC6677"), false);

// Prueba 3: teléfono con letras solamente
assert.strictEqual(validarTelefono("telefono"), false);

// Prueba 4: teléfono vacío
assert.strictEqual(validarTelefono(""), false);

// Prueba 5: teléfono con símbolos
assert.strictEqual(validarTelefono("280-455-6677"), false);

console.log("Todas las pruebas fueron aprobadas.");
