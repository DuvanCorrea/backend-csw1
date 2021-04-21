**IMPORTANTE** 
En caso de usar directamente la api en un servidor online hacer peticiones a **https://servercsw1.herokuapp.com/** complementando con la ruta deseada

**Base de datos online**
La base de datos online esta alojada en https://remotemysql.com/phpmyadmin/sql.php
 
 **Credenciales de base de datos**
En el archivo "keys.js"

## API para trabajo de creación de software.

En caso de usarlo de forma local se recomienda:

La base de datos es MySql

Para comenzar debemos clonar el repositorio y crear la base de datos, para la creación de esta se deja el script en el repositorio.
 
Abrir una terminal o cmd en la ubicación de la carpeta clonada e instalar las dependencia con el comando `npm i`

usar el comento `npm start` para iniciar o `npm run dev` para ejecutar con nodemon

## Rutas

* ### DOCENTES

Para los docentes se tienen las siguientes rutas como puntos de acceso:

Petición **GET** a **/api/docente** -> nos devuelve todos los docentes registrados en la base de datos.

Petición **GET** a **/api/docente/:id_docente** -> donde :id_docente se reemplaza con el id a buscar y nos devuelve el docente cuyo id coincida con el que enviemos.

Petición **POST** a **/api/docente/login** -> nos sirve hacer login en el sistema, para esta ruta se debe enviar el siguiente formato

``` json
{
        "correo":  "correo del docente",
        "clave":  "docente como texto"
}
```

* ### MATERIALES

Para los materiales se tienen las siguientes rutas como puntos de acceso:

Petición **GET** a **/api/material** -> nos devuelve todos los materiales registrados en la base de datos.

Petición **GET** a **/material/:id_material** -> donde :id_material se reemplaza con el id a buscar y nos devuelve el material cuyo id coincida con el que enviemos.

Petición **DELETE** a **/material/:id_material** -> donde :id_material se reemplaza con el id a eliminar.

Petición **POST** a **/api/material** -> para crear un  nuevo material, el formato a enviar es

``` json
{
        "titulo_material":"titulo",
        "material":"archivo en pdf",
        "fecha_material":"2000-01-01 00:00:00",
        "DOCENTES_id_docente":"id tomado del docente actual, no ingresar manual",
        "publicado":"2000-01-01 00:00:00"
}
```

* ### RECONOCIMIENTO

Para los reconocimiento se tienen las siguientes rutas como puntos de acceso:

Petición **GET** a **/api/reconocimiento** -> nos devuelve todos los reconocimeinto registrados en la base de datos.

Petición **GET** a **/reconocimiento/:id_reconocimiento** -> donde :id_material se reemplaza con el id a buscar y nos devuelve el reconocimiento cuyo id coincida con el que enviemos.

Petición **DELETE** a **/reconocimiento/:id_material** -> donde :id_material se reemplaza con el id a eliminar.

Petición **POST** a **/api/reconocimiento** -> para crear un  nuevo reconocimiento, el formato a enviar es

``` json
{
        "id_docente":"id del docente con sesion iniciada, no ingresar manual",
        "persona_que_otorga":"quien otorga",
        "persona_que_recibe":"quien recibe",
        "entidad_otorga":"SENA",
        "razon":"ni idea",
        "anio_reconocimiento":"2000-10-1 00:00:00"
}
```
