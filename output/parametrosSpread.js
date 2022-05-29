"use strict";

// Curso de ES6 11.- Parametros Rest y Spread
//https://youtu.be/xoLsbVGJIyE
console.log('--Parametros Spread--');

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  //guarda todos los datos en un array
  console.log(datos);
}; //mostrarDatos(' Carlos ', 23, ' correo@correo.com ', ' Mexico ');


var arregloDatos = [' Carlos ', 23, ' correo@correo.com ', ' Mexico '];
mostrarDatos.apply(void 0, arregloDatos); //así le estamos pasando cada elemento del arreglo como un argumento/'parametro', una lista de argumentos