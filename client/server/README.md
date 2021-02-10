# Server
Este proyecto fue generado mediante el gestor de paquetes yarn 1.22.5
## Build
Ejecutar `yarn install` para instalar las dependecias del proyecto
## Development Server
Ejecutar `node start.js` y navegar hasta https://localhost:3000/
Si está en Windows y las dependencias no se instalaron correctamente, elimine la carpeta node_modules y ejecute otra vez `yarn install`

## Usage
Para obtener acceso al cluster, tendrá que modificar la url del archivo db/index.js en los parámetros `<username>`
y `<password>` por las credenciales que se le otorgarán en privado.
Utilizar postman para enviar peticiones según convenga (get,post,put,delete) y a las rutas programadas.
