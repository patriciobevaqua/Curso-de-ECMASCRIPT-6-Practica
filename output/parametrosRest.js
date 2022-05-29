"use strict";

// Curso de ES6 11.- Parametros Rest y Spread
// https://youtu.be/xoLsbVGJIyE
console.log('-- Parametros Rest --'); // const mostrarDatos=(nombre, edad, correo, pais) => {
//     console.log(nombre, edad, correo, pais);
// }
// mostrarDatos(' Carlos ', 23, ' correo@correo.com ', ' Mexico ');

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  //guarda todos los datos en un array
  console.log(datos);
};

mostrarDatos(' Carlos ', 23, ' correo@correo.com ', ' Mexico ');