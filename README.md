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


Errores Encontrados:
- Al ejecutar R surgía el siguiente mensaje:
```
During startup - Warning messages:
1: Setting LC_CTYPE failed, using "C" 
2: Setting LC_COLLATE failed, using "C" 
3: Setting LC_TIME failed, using "C" 
4: Setting LC_MESSAGES failed, using "C" 
5: Setting LC_MONETARY failed, using "C" 
6: Setting LC_PAPER failed, using "C" 
7: Setting LC_MEASUREMENT failed, using "C" 
```

Se solucionó forzando el lenguaje a utilizar por R, con el domando:
```
defaults write org.R-project.R force.LANG en_US.UTF-8
```
*Nota: dentro del entorno de la consola de VS Code no funciona. Hay que ejecutar la API desde la consola de Linux.*


