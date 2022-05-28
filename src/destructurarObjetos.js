console.log('-- destructurar objetos --');

const usuario = {
    nombre: ' Carlos ',
    correo: 'correo@correo.com',
    edad: 22,
    pais: ' Mexico ',
    profesion: 'Desarrollador Web'
}

const usuario1 = {
    nombre1: ' Rocío ',
    correo1: 'correo@correo.com',
    edad1: 26,
    pais1: ' EEUU ',
}

console.log(usuario.nombre);

const { nombre, correo, edad, pais, profesion } = usuario;	// destructurar objetos

const { nombre1, pais1, profesion1 = 'No especificada' } = usuario1;	// destructurar objetos


console.log(`tomado desde el destructurado ${nombre}`);
console.log(nombre, correo, edad, pais, profesion);
console.log(` ${nombre} ${correo} ${edad} ${pais} ${profesion}`);

console.log(` ${nombre1} ${pais1} ${profesion1}`);

const usuario2 = {
    nombre2: ' Raul ',
    correo2: 'correo@correo.com',
    edad2: 26,
    pais2: ' EEUU ',
}




// ejemplo de destructurar objetos en una funcion
const mostrarInfo =({nombre2, correo2, edad2, pais2, profesion2='Estudiante'}) => {
    console.log(` ${nombre2} ${correo2} ${edad2} ${pais2} ${profesion2}`);
}

// arrow function en una línea
// const mostrarInfo =({nombre2, correo2, edad2, pais2, profesion2='Estudiante'}) =>  console.log(` ${nombre2} ${correo2} ${edad2} ${pais2} ${profesion2}`);


mostrarInfo(usuario2);

// sigue clases