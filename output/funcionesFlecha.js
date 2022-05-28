"use strict";

// VIDEO6 Curso de ES6 5.- Funciones de Tipo Flecha
console.log('-- VIDEO6 - Funciones de Tipo Flecha --');
var nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
var numero_caracteres = nombres.map(function (nombre) {
  console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
});
console.log('Misma solución escrita como Arrow function'); // escrita como Arrow function:
//(parametro)=>{
// return // codigoaejecutar
//}
// si es un solo parametro no se pone parentesis, si es mas de un parametro se pone parentesis
// si es una función con una línea se puede omitir la palabra return y eliminar las llaves

var numero_caracteres_arrow = nombres.map(function (nombre) {
  return console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
});
var numero_caracteres_arrow1 = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(numero_caracteres_arrow1);