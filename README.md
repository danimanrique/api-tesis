# api-asq

a [Sails v1](https://sailsjs.com) application


Dependencias Utilizadas:
- [r-script](https://github.com/joshkatz/r-script): módulo para ejecutar scripts de R con parámetros de entradas y salida. Contiene un error en el fichero index.js de la libreria, se sustituyeron las lineas de la función "init" por las siguientes: *(nota abril 2019)*
```javascript
 function init(path) {
  var obj = new R(path);
  _.bindAll(obj, "data", "call", "callSync");
  return obj;
}
```



