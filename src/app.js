console.log('------Ejercicios de módulos en JavaScript------');

// import { mensajeAlerta,saludar } from "./modulos/mensajeAlerta";
import { mensajeAlerta } from "./modulos/mensajeAlerta";

//import { Persona } from "./modulos/clasePersona";
import  Clase  from "./modulos/clasePersona";   //al exportar por default puedo omitir llaves y cambiar nombre de la clase


mensajeAlerta('este es el mensaje de alerta de una función importada');


const carlos=new Clase('Carlos',30);
carlos.mostrarInfo();