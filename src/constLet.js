console.log('Hola mundo en archivo constLet.js');
let nombre = 'Carlos Rafael Arturo';
console.log('Hola ' + nombre);
nombre = 'Carlos Arturo';
console.log('Nombre actualizado: ' + nombre);
//-----------------------------------

// Ejemplos VIDEO4. Curso de ES6 3.- Nuevas Formas de Declarar Variables

// var nombre'Carlos';
// var nombre'Arturo'; Antes dejaba crear una variable con el mismo nombre, lo cual es un error.

let pais = 'Mexico';
console.log('Hola ' + pais);
const pi = 3.1416;
console.log('el valor de pi lo ponemos en una variable constante: ' + pi);

// scope    -> no se puede acceder a variables fuera de una función, si están creadas en esa función.
function saludar() {
    var name = 'Carlos';
    console.log('Hola ' + name);
}

saludar();
// console.log('variable nombre ' + name);

// ejemplo SCOPE 6:30 VIDEO3   ->  let y const son a nivel bloque de código, no de función. (el scope de var es a nivel de función)

// var edad = 18;
// if (edad >= 18) {
//     var esAdulto = true;
// }
// console.log('esAdulto: ' + esAdulto);

// al poner la variable con let o const, no podría acceder a ella desde fuera del bloque de código. {}
let edad = 18;
if (edad >= 18) {
    let esAdulto = true;
    console.log('esAdulto: ' + esAdulto);
}

// ejemplo de utilización de let y const
// const to usamos cuando queremos que el valor de una variable nunca camble.

// const nombre1='Carlos';
// nombre1='Arturo';
// console.log(nombre1);

// caso del array en el que sí se pueden variar los datos internos del array.
const colores=['Rojo','Verde'];
colores.push('Azul');
console.log(colores);

// VIDEO5. Curso de ES6 4.- Template Strings
// sigue en el archivo de templateStrings.js
