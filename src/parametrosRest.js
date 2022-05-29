// Curso de ES6 11.- Parametros Rest y Spread
// https://youtu.be/xoLsbVGJIyE

console.log('-- Parametros Rest --');

// const mostrarDatos=(nombre, edad, correo, pais) => {
//     console.log(nombre, edad, correo, pais);
// }
// mostrarDatos(' Carlos ', 23, ' correo@correo.com ', ' Mexico ');

const mostrarDatos=(...datos) => {   //guarda todos los datos en un array
    console.log(datos);
}
mostrarDatos(' Carlos ', 23, ' correo@correo.com ', ' Mexico ');