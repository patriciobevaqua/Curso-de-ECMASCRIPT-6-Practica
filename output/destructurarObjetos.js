"use strict";

console.log('-- destructurar objetos --');
var usuario = {
  nombre: ' Carlos ',
  correo: 'correo@correo.com',
  edad: 22,
  pais: ' Mexico ',
  profesion: 'Desarrollador Web'
};
var usuario1 = {
  nombre1: ' Rocío ',
  correo1: 'correo@correo.com',
  edad1: 26,
  pais1: ' EEUU '
};
console.log(usuario.nombre);
var nombre = usuario.nombre,
    correo = usuario.correo,
    edad = usuario.edad,
    pais = usuario.pais,
    profesion = usuario.profesion; // destructurar objetos

var nombre1 = usuario1.nombre1,
    pais1 = usuario1.pais1,
    _usuario1$profesion = usuario1.profesion1,
    profesion1 = _usuario1$profesion === void 0 ? 'No especificada' : _usuario1$profesion; // destructurar objetos

console.log("tomado desde el destructurado ".concat(nombre));
console.log(nombre, correo, edad, pais, profesion);
console.log(" ".concat(nombre, " ").concat(correo, " ").concat(edad, " ").concat(pais, " ").concat(profesion));
console.log(" ".concat(nombre1, " ").concat(pais1, " ").concat(profesion1));
var usuario2 = {
  nombre2: ' Raul ',
  correo2: 'correo@correo.com',
  edad2: 26,
  pais2: ' EEUU '
}; // ejemplo de destructurar objetos en una funcion

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre2 = _ref.nombre2,
      correo2 = _ref.correo2,
      edad2 = _ref.edad2,
      pais2 = _ref.pais2,
      _ref$profesion = _ref.profesion2,
      profesion2 = _ref$profesion === void 0 ? 'Estudiante' : _ref$profesion;
  console.log(" ".concat(nombre2, " ").concat(correo2, " ").concat(edad2, " ").concat(pais2, " ").concat(profesion2));
}; // arrow function en una línea
// const mostrarInfo =({nombre2, correo2, edad2, pais2, profesion2='Estudiante'}) =>  console.log(` ${nombre2} ${correo2} ${edad2} ${pais2} ${profesion2}`);


mostrarInfo(usuario2); // sigue clases