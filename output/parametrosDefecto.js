"use strict";

console.log('-- parámetros por defecto --');

function registrarUsuario() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonimo';
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Desconocido';
  var correo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ingrese su correo';
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No especificado';
  // nombre = nombre;
  // pais = pais;
  // correo = correo;
  // telefono = telefono;
  return "Nombre : ".concat(nombre, " , Pais : ").concat(pais, " , Correo : ").concat(correo, " , Telefono : ").concat(telefono);
}

console.log(registrarUsuario());
console.log(registrarUsuario('Luis', 'Mexico', 'luis@gmail.com'));
console.log(registrarUsuario('Luis', undefined, 'luis@gmail.com')); // sigue destructurar arreglos