console.log( '-- parámetros por defecto --');

function registrarUsuario(nombre='Anonimo', pais='Desconocido', correo='ingrese su correo', telefono='No especificado') {
    // nombre = nombre;
    // pais = pais;
    // correo = correo;
    // telefono = telefono;

    return `Nombre : ${nombre} , Pais : ${pais} , Correo : ${correo} , Telefono : ${telefono}`;

}

console.log(registrarUsuario());
console.log(registrarUsuario('Luis', 'Mexico', 'luis@gmail.com'));
console.log(registrarUsuario('Luis', undefined, 'luis@gmail.com'));

// sigue destructurar arreglos