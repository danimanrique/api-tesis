# api-asq

** Framework utilizado:
[Sails v1](https://sailsjs.com): es un framework para Node.js. Está realizado bajo el framework Express, incluyendo varias capas de abstracción para hacer un desarrollo más fácil. Posee un ORM, métodos para crear API RESTful y soporte para manejar peticiones en tiempo real gracias a Socket.io.


** Instalación
TODO


** Datos de Entorno
La aplicación precisa de la generación de un archivo que posee datos sensibles de configuración (ej. credenciales de acceso a base de datos), por esta razón no fueron incluidos en este repositorio, pero se proporciona un fichero de ejemplo **[config.private.example](config.private.example)** que debe ser completado por el usuario.


** Dependencias Utilizadas:
- [r-script](https://github.com/joshkatz/r-script): librería para ejecutar scripts de R con parámetros de entradas y salida. Contiene un error en el fichero index.js de la libreria, se sustituyeron las lineas de la función "init" por las siguientes: *(nota abril 2019, verificar updates)*
```javascript
function init(path) {
  var obj = new R(path);
  _.bindAll(obj, "data", "call", "callSync");
  return obj;
}
```
- [mysql2](https://github.com/sidorares/node-mysql2): librería que funciona como cliente MySQL para NodeJS. Se utiliza para realizar consultas directamente a la base de datos original del sistema ASQ.

- [bcript](https://github.com/kelektiv/node.bcrypt.js): librería utilizado para encriptar las claves de usuarios registrados en la web.

- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): librería utilizada para crear tokens de sesión que identifican a los usuarios de la web y aporta más seguridad para la comunicación entre web y API.


** Errores Encontrados:
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


