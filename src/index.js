const express = require("express");
const cors = require("cors");
const app = express()
const fileUpload = require('express-fileupload')

// exportacion de las rutas
// ------------------------
const docenteRutas = require("./rutas/docente.routes")
const materialRutas = require("./rutas/material.routes")
const reconocimientoRutas = require("./rutas/reconocimiento.routes")
const documentoRutas = require("./rutas/documento.routes")

// configuraciones del servidor
// ----------------------------
app.set("port", process.env.PORT || 4000)

// manejo de cors
// --------------
var whitelist = ["https://www.ferreteria-mithaes-pdv.com"];

var corsOptions = {
    origin: function (origin, callback) {
        if (true) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));

// middlewares
// -----------
app.use(express.json()) // para convertir texto plano en formato json
app.use(fileUpload())

// agregar rutas al servidor
// -------------------------
app.use("/api", docenteRutas)
app.use("/api", materialRutas)
app.use("/api", reconocimientoRutas)
app.use("/api", documentoRutas)

// iniciando servidor
// ------------------
app.listen(app.get("port"), () => {
    console.log("Ejecutando servidor en el puerto ", app.get("port"))
})