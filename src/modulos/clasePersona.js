//export class Persona {
//class Persona {
//export default class Persona {      //con default sólo se puede exportar una sóla vez, una clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarInfo() {
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}

//export { Persona };
export default Persona;