// Prommesas
// Promesas son objetos que representan una tarea asincrona.
// (Video13) Curso de ES6 12.- Promesas https://youtu.be/3jfRLyyQ_4w

console.log('--Promesas--');

const promesa = new Promise((resolve, reject) => {
    // Accion que se ejecutara .

    // resolve('Hola');
    // reject('Error');

    setTimeout(() => {           //para simular que se demora la ejecucion de la promesa

        const exito = true;
        if (exito) {
            resolve('La operación se realizo correctamente');
        } else {
            reject('La operación no tuvo éxito');
        }

    }, 4000);


});

promesa.then((mensaje) => {             //ejecuta si la acción es resolve
    alert(mensaje);

});

promesa.catch((mensaje) => {            //ejecuta si la acción es reject
    alert(mensaje);

});