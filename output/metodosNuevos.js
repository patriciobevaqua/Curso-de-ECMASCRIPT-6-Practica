"use strict";

console.log('-----------------Metodos Nuevos-----------------');
var texto = 'Hola Mundo';
console.log(texto, 'empieza con h: ', texto.toLowerCase().startsWith('h'));
console.log(texto, 'termina con m: ', texto.toLowerCase().endsWith('m'));
console.log(texto, 'contiene la palabra mundo: ', texto.toLowerCase().includes('mundo'));
var amigos = ['Juan', 'Pedro', 'Maria', 'Pablo'];
console.log(amigos);
console.log(amigos, 'contiene Pedro:', amigos.includes('Pedro'));
console.log('contiene Pablo:', amigos.includes('Pablo'));
console.log('devuelve el primer elemento del arreglo con longitud mayor a 3:', amigos.find(function (amigo) {
  return amigo.length > 3;
}));
console.log('devuelve Maria si existe :', amigos.find(function (amigo) {
  return amigo === 'Maria';
}));
console.log('devuelve el índice de un elemento:', amigos.findIndex(function (amigo) {
  return amigo === 'Maria';
})); // siguiente video instalando y configurando webpack con babel