// Curso de ES6 11.- Parametros Rest y Spread
//https://youtu.be/xoLsbVGJIyE

console.log('--Parametros Spread--');

const mostrarDatos = (...datos) => { //guarda todos los datos en un array
    console.log(datos);
}

//mostrarDatos(' Carlos ', 23, ' correo@correo.com ', ' Mexico ');

const arregloDatos = [' Carlos ', 23, ' correo@correo.com ', ' Mexico '];
mostrarDatos(...arregloDatos); //así le estamos pasando cada elemento del arreglo como un argumento/'parametro', una lista de argumentos

