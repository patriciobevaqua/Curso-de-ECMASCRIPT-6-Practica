// VIDEO6 Curso de ES6 5.- Funciones de Tipo Flecha
console.log('-- VIDEO6 - Funciones de Tipo Flecha --');

const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];

const numero_caracteres = nombres.map(function (nombre) {
    console.log(`${nombre} tiene ${nombre.length} letras`);
});

console.log('Misma solución escrita como Arrow function');
// escrita como Arrow function:
//(parametro)=>{
// return // codigoaejecutar
//}
// si es un solo parametro no se pone parentesis, si es mas de un parametro se pone parentesis
// si es una función con una línea se puede omitir la palabra return y eliminar las llaves

const numero_caracteres_arrow = nombres.map( nombre => console.log(`${nombre} tiene ${nombre.length} letras`));

const numero_caracteres_arrow1 = nombres.map((nombre) => `${nombre} tiene ${nombre.length} letras`);
console.log(numero_caracteres_arrow1);

