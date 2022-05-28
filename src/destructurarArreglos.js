console.log('-- destructurar arreglos --');

const persona = ['Carlos Arturo', 23, 'Mexico', 'Desarrollador Web'];

// Antes de destructurar arreglos
// const nombre = persona [ 0 ] ;
// const edad = persona [ 1 ] ; 

const [nombre, edad, pais, profesion = 'No Especificado'] = persona;

// const [nombre, , paris, profesion= 'No Especificado'] = persona;   // si no queremos extraer todos los elementos


console.log(nombre);
console.log(edad);
console.log(profesion);

console.log('-----------------');

// muestro datos a partir de un arreglo
const mostrarInfo = (persona) => {

    console.log(persona[2]);  // muestro el elemento 2 del arreglo, en este caso el pais

}

mostrarInfo(persona);

console.log('-----------------');

// muestro datos a partir de la destructuracion de un arreglo
const mostrarInfoNombre = (nombre) => {

    console.log(nombre);

}

mostrarInfoNombre(nombre);

console.log('-----------------');

// si queremos destructurar dentro de los parámetros
const mostrarInfoNombre1 = ([nombre, ,pais, profesion = 'No Especificado'] = persona) => {

    console.log(nombre, pais);
    console.log(nombre, pais, profesion);


}

// pensada como arrow function de una sola línea
// const mostrarInfoNombre1 = ([nombre, ,pais, profesion = 'No Especificado'] = persona) =>  console.log(nombre, pais, profesion);


mostrarInfoNombre1(persona);


// sigue destructurar objetos
