const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const GETONE = "SELECT id_docente, nombre_completo, correo, anio_nacimiento, areas_conocimiento, materia FROM DOCENTES WHERE (id_docente=?)"
const GETALL = "SELECT * FROM DOCENTES"
const POST = "SELECT * FROM DOCENTES WHERE (correo=?)"

// controlador de autenticacion de usuario
// ---------------------------------------
const docenteCtrl = {

    // Metodo para consulta un solo docente
    // ------------------------------------
    getUnSoloDocenteSinMaterialNiReconocimiento: (req, res) => {

        // se extrae la informacion enviada desde front
        // --------------------------------------------
        const { id_docente } = req.params

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(GETONE, [id_docente], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                    } else {
                        if (rows.length <= 0) {
                            res.status(404)
                            res.send({ respuesta: "docente no encontrado", descripcion: "no se encontro el docente en la base de datos" })
                        } else {

                            res.send(rows[0])

                        }
                    }
                })
            }
        })

    },

    // metodo para autenticar usuario
    // ------------------------------
    post: (req, res) => {

        // se extrae la informacion enviada desde front
        // --------------------------------------------
        const { correo, clave } = req.body

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(POST, [correo], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                    } else {
                        if (rows.length <= 0) {
                            res.status(404)
                            res.send({ respuesta: "docente no encontrado", descripcion: "no se encontro el docente en la base de datos" })
                        } else {
                            // se hace la validacion de la contraseña
                            // --------------------------------------
                            if (rows[0].clave === clave) {
                                res.send({
                                    valido: true, mensaje: "docente validado", docente: {
                                        id: rows[0].id_docente,
                                        nombre: rows[0].nombre_completo,
                                        correo: rows[0].correo,
                                        nacimiento: rows[0].anio_nacimiento,
                                        areas: rows[0].areas_conocimiento,
                                        materia: rows[0].materia
                                    }
                                })
                            } else {
                                res.send({ valido: false, mensaje: "contraseña incorrecta" })
                            }
                        }
                    }
                })
            }
        })
    },

    // Metodo para consulta todos los docentes
    // ---------------------------------------
    getTodosLosDocentesSinMaterialNiReconocimiento: (req, res) => {

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(GETALL, [], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                    } else {
                        res.send(rows)
                    }
                })
            }
        })

    },

}

module.exports = docenteCtrl