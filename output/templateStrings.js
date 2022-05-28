"use strict";

// VIDEO5. Curso de ES6 4.- Template Strings
console.log('-- VIDEO5 - Template Strings --');
var nombre = 'Carlos';
var edad = 18;
var pais = 'Mexico';
console.log('la persona es ' + nombre + ' tiene ' + edad + ' años ' + ' y es de ' + pais); // Template Strings

console.log("la persona es ".concat(nombre, " tiene ").concat(edad, " a\xF1os y es de ").concat(pais));
console.log("\xA1Hola, ".concat(nombre, "!")); // sigue funcionesFlecha.js Curso de ES6 5.- Funciones de Tipo Flecha