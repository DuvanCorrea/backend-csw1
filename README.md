## API para trabajo de creación de software.

En caso de usarlo de forma local se recomienda:

La base de datos es MySql

Para comenzar debemos clonar el repositorio y crear la base de datos, para la creación de esta se deja el script en el repositorio.
 
Abrir una terminal o cmd en la ubicación de la carpeta clonada e instalar las dependencia con el comando `npm i`

En caso de usar directamente la api en un servidor online hacer peticiones a **https://servercsw1.herokuapp.com/** complementando con la ruta deseada

**Base de datos online**
La base de datos online esta alojada en https://remotemysql.com/phpmyadmin/sql.php
 
 **Credenciales de base de datos**
En el archivo "keys.js"

## Rutas

- ### Docentes
Para los docentes se tienen las siguientes rutas como puntos de acceso:

Petición **GET** a **/api/docente** -> nos devuelve todos los docentes registrados en la base de datos.

Petición **GET** a **/api/docente/:id_docente** -> donde :id_docente se reemplaza con el id a buscar y nos devuelve el docente cuyo id coincida con el que enviemos.

Petición **POST** a **/api/docente/login** -> nos sirve hacer login en el sistema, para esta ruta se debe enviar el siguiente formato
```json
{
        "id_docente":  "id como entero",
        "clave":  "docente como texto"
}
```
