"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

console.log('-- destructurar arreglos --');
var persona = ['Carlos Arturo', 23, 'Mexico', 'Desarrollador Web']; // Antes de destructurar arreglos
// const nombre = persona [ 0 ] ;
// const edad = persona [ 1 ] ; 

var nombre = persona[0],
    edad = persona[1],
    pais = persona[2],
    _persona$ = persona[3],
    profesion = _persona$ === void 0 ? 'No Especificado' : _persona$; // const [nombre, , paris, profesion= 'No Especificado'] = persona;   // si no queremos extraer todos los elementos

console.log(nombre);
console.log(edad);
console.log(profesion);
console.log('-----------------'); // muestro datos a partir de un arreglo

var mostrarInfo = function mostrarInfo(persona) {
  console.log(persona[2]); // muestro el elemento 2 del arreglo, en este caso el pais
};

mostrarInfo(persona);
console.log('-----------------'); // muestro datos a partir de la destructuracion de un arreglo

var mostrarInfoNombre = function mostrarInfoNombre(nombre) {
  console.log(nombre);
};

mostrarInfoNombre(nombre);
console.log('-----------------'); // si queremos destructurar dentro de los parámetros

var mostrarInfoNombre1 = function mostrarInfoNombre1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      pais = _ref2[2],
      _ref2$ = _ref2[3],
      profesion = _ref2$ === void 0 ? 'No Especificado' : _ref2$;

  console.log(nombre, pais);
  console.log(nombre, pais, profesion);
}; // pensada como arrow function de una sola línea
// const mostrarInfoNombre1 = ([nombre, ,pais, profesion = 'No Especificado'] = persona) =>  console.log(nombre, pais, profesion);


mostrarInfoNombre1(persona); // sigue destructurar objetos