// Clases y herencia
console.log('-- Clases y Herencia --');


class Usuario {

    // constructor() {   //se ejecuta cada vez que se crea una nueva instancia de la clase 
    //     this.nombre = " Carlos Arturo ";
    //     this.edad = 23
    // }

    constructor(nombre, edad, correo) {   //se ejecuta cada vez que se crea una nueva instancia de la clase 
        this.nombre = nombre;  //this.nombre es una propiedad de la clase
        this.edad = edad;
        this.correo = correo
    }

    mostrarSaludo(mensaje) {       //metodo de la clase: funcion que se ejec   uta sobre la instancia de la clase
        return '  Hola ' + this.nombre + ' ' + mensaje;

    }

    mostrarinfo() {
        return ` 
    <b>Nombre:</b> ${this.nombre} <br/>
    <b>Edad:</b> ${this.edad}  <br/>
    <b>Correo:</b> ${this.correo} <br/>
    <hr/>    
    `;


    }


}


const carlos = new Usuario('Carlos Arturo  ', 23, '@carlosarturo.com');
document.write(carlos.nombre);
document.write('<h4>' + carlos.edad + '</h4>');

const alejandro = new Usuario('Alejandro  ', 43, '@alejandro.com');
document.write(alejandro.nombre);
document.write(alejandro.edad);

document.write(carlos.mostrarSaludo('ingresando el mensaje por parámetro de Carlos a la función' + '<br/> <br/>'));
document.write(carlos.mostrarinfo());
document.write(alejandro.mostrarinfo());

class Estudiante extends Usuario {   //Estudiante hereda de Usuario
    constructor(nombre, edad, correo, carrera) {  //sobreescribimos el método constructor
        super(nombre, edad, correo);
        this.carrera = carrera;
    }

    mostrarinfo() {    //sobreescribimos el método mostrarinfo
        return ` 
        <b>Nombre:</b> ${this.nombre} <br/>
        <b>Edad:</b> ${this.edad}  <br/>
        <b>Correo:</b> ${this.correo} <br/>
        <b>Carrera:</b> ${this.carrera} <br/>

        <hr/>    
        `;


    }
}

const ezequiel = new Estudiante('Ezequiel  ', 19, '@ezequiel.com', 'Ingeniería en Sistemas');
document.write(ezequiel.mostrarinfo());

// sigue nueva forma para trabajar con objetos