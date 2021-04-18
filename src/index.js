const express = require("express");
const cors = require("cors");
const app = express()

// exportacion de las rutas
// ------------------------
const docenteRutas = require("./rutas/docente.routes")

// configuraciones del servidor
// ----------------------------
app.set("port", process.env.PORT || 3000)

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

// agregar rutas al servidor
// -------------------------
app.use("/api", docenteRutas)

// iniciando servidor
// ------------------
app.listen(app.get("port"), () => {
    console.log("Ejecutando servidor en el puerto ", app.get("port"))
})