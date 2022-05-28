console.log('-- Acortar Objetos --');


// Acortar objetos
// ES6 cuando se llaman igual los parámetros y la llave la asignación se puede hacer con el nombre
// const crearObjeto = (nombre, edad) => ({ nombre, edad })

const crearObjeto = (nombre, edad) => {
    return {    //return es una función que retorna un objeto
        // nombre: nombre,
        // edad: edad
        nombre,    // ES6 cuando se llaman igual los parámetros y las llaves la asignación se puede hacer con el nombre
        edad,
        // mostrarInfo : ( ) => {          //Asignación de función
        //     return `${nombre} tiene ${edad} años `;
        // }

        mostrarInfo() {   //Asignación de función con ES6
            return `${nombre} tiene ${edad} años `;
        }



    }
}


console.log(crearObjeto(' Carlos ', 23));
console.log(crearObjeto(' Carlos ', 23).mostrarInfo());

// sigue video 12 Parámetros Rest y Spread