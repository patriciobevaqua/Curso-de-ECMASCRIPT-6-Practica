// Language: javascript ES6


// probando JSON.stringify()

let a={
    title: 'pelicula 4',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
};

console.log('variable a   ', a); // 

console.log('json.stringify   ', JSON.stringify(a)); // Imprime un objeto de js como string, como un JSON

console.log('json.stringify con parametros  ', JSON.stringify(a,null, 5)); // Imprime un objeto de js como un json 

console.log('object.keys   ',Object.keys(a)); // Imprime las claves del objeto

let b=a;

console.log('variable b   ', b); // 

b= JSON.stringify(b);

console.log('variable b asingo a como json   ', b); // 


console.log('json.parse variable b   ', JSON.parse(b)); // 



// spread operator
let numeros = [10, 4, 7, 15, 3, 25];

console.log(numeros); // Imprime un array.

console.log(...numeros); // Imprime una lista de argumentos.

//---------------------------------

const movies = [
    {
        title: 'pelicula 4',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
    },
    {
        title: 'pelicula 2',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        score: 9.2
    },
    {
        title: 'pelicula 3',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        score: 9
    },
    {
        title: 'pelicula 5',
        year: 1994,
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genre: ['Action', 'Crime', 'Drama', 'Thriller'],
        score: 9
    },
    {
        title: 'pelicula 1',
        year: 1957,
        director: 'Sidney Lumet',
        duration: '1h 36min',
        genre: ['Crime', 'Drama'],
        score: 8.9
    },]

console.log("EXERCICE 5 movies ->", movies);
console.log("EXERCICE 5 spread operator ->", ...movies);



function orderByYear([...array]) {
    let compare_year_title = (a, b) => {   // es una función de apoyo a sort()  compareFunction(a, b)
        // console.log("EXERCICE 5 ->", a, b);

        if (a.year < b.year)
            return -1;
            // console.log("return", -1);
        if (a.year > b.year)
            return 1;
            // console.log("return", 1);
        if (a.title < b.title)
            return -1;
            // console.log("return b", -1);
        if (a.title > b.title)
            return 1;
            // console.log("return b", 1);
        return 0;
    }
    let result = array.sort(compare_year_title); // ordena el array, devuelve el array ordenado
    console.log("EXERCICE 5 result ->", result);
    // console.log('ordenado con función:', array.sort(compare_year_title));
    return result;
}

orderByYear(movies);

// Condicionales, control de flujo  (1hr:10min)
console.log('------------- Condicionales -------------');
// if (condicion) {}
let passwordDB = 'pepe123'
let input = 'pepe123'
let result = input == passwordDB;
// se puede escribir así porque la posible solución simplemente puede tener dos estados: true o false
if (passwordDB > input) {
    console.log('primer if');
}

if (passwordDB < input) {
    console.log('segundo if');
}

else if (passwordDB.charAt(0) == input.charAt(0)) {
    console.log('tercer if');
}

else if (passwordDB.charAt(0) == input.charAt(0) && passwordDB.charAt(1) == input.charAt(1)) {
    console.log('cuarto if');
}


// else if (condicion) {}   o ingresa en el if o ingresa en el else if, si no se muestra uno de ellos se muestra el else
let score = 70;
if (score > 30) {
    console.log('You need to practice more');
} else if (score > 15) {
    console.log('Estas mejorando');
}
else {
    console.log('You need to follow this tutorial');
}

// else {}
let passwordDB1 = 'pepe123'
let input1 = 'pepe123'
9
let result2 = input1 == passwordDB1;
if (result2 == true) {
    console.log('Login Correcto');
} else {
    console.log('Contraseña incorrecta');
}
