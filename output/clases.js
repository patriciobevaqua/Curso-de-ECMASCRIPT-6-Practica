"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Clases y herencia
console.log('-- Clases y Herencia --');

var Usuario = /*#__PURE__*/function () {
  // constructor() {   //se ejecuta cada vez que se crea una nueva instancia de la clase 
  //     this.nombre = " Carlos Arturo ";
  //     this.edad = 23
  // }
  function Usuario(nombre, edad, correo) {
    _classCallCheck(this, Usuario);

    //se ejecuta cada vez que se crea una nueva instancia de la clase 
    this.nombre = nombre; //this.nombre es una propiedad de la clase

    this.edad = edad;
    this.correo = correo;
  }

  _createClass(Usuario, [{
    key: "mostrarSaludo",
    value: function mostrarSaludo(mensaje) {
      //metodo de la clase: funcion que se ejec   uta sobre la instancia de la clase
      return '  Hola ' + this.nombre + ' ' + mensaje;
    }
  }, {
    key: "mostrarinfo",
    value: function mostrarinfo() {
      return " \n    <b>Nombre:</b> ".concat(this.nombre, " <br/>\n    <b>Edad:</b> ").concat(this.edad, "  <br/>\n    <b>Correo:</b> ").concat(this.correo, " <br/>\n    <hr/>    \n    ");
    }
  }]);

  return Usuario;
}();

var carlos = new Usuario('Carlos Arturo  ', 23, '@carlosarturo.com');
document.write(carlos.nombre);
document.write('<h4>' + carlos.edad + '</h4>');
var alejandro = new Usuario('Alejandro  ', 43, '@alejandro.com');
document.write(alejandro.nombre);
document.write(alejandro.edad);
document.write(carlos.mostrarSaludo('ingresando el mensaje por parámetro de Carlos a la función' + '<br/> <br/>'));
document.write(carlos.mostrarinfo());
document.write(alejandro.mostrarinfo());

var Estudiante = /*#__PURE__*/function (_Usuario) {
  _inherits(Estudiante, _Usuario);

  var _super = _createSuper(Estudiante);

  //Estudiante hereda de Usuario
  function Estudiante(nombre, edad, correo, carrera) {
    var _this;

    _classCallCheck(this, Estudiante);

    //sobreescribimos el método constructor
    _this = _super.call(this, nombre, edad, correo);
    _this.carrera = carrera;
    return _this;
  }

  _createClass(Estudiante, [{
    key: "mostrarinfo",
    value: function mostrarinfo() {
      //sobreescribimos el método mostrarinfo
      return " \n        <b>Nombre:</b> ".concat(this.nombre, " <br/>\n        <b>Edad:</b> ").concat(this.edad, "  <br/>\n        <b>Correo:</b> ").concat(this.correo, " <br/>\n        <b>Carrera:</b> ").concat(this.carrera, " <br/>\n\n        <hr/>    \n        ");
    }
  }]);

  return Estudiante;
}(Usuario);

var ezequiel = new Estudiante('Ezequiel  ', 19, '@ezequiel.com', 'Ingeniería en Sistemas');
document.write(ezequiel.mostrarinfo()); // sigue nueva forma para trabajar con objetos