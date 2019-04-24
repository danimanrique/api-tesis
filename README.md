# api-asq

a [Sails v1](https://sailsjs.com) application


Dependencias Utilizadas:
- r-script: conexión para ejecutar scripts de R con parámetros de entradas.

 Error en fichero index.js de la libreria, se sustituyeron las de la función "init" por las siguientes:

 function init(path) {
  var obj = new R(path);
  _.bindAll(obj, "data", "call", "callSync");
  return obj;
}



