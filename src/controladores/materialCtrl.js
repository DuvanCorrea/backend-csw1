const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const GETONE = "SELECT * FROM MATERIALES WHERE (id_docente=?)" // selecciona el material de un docente
const GETALL = "SELECT * FROM MATERIALES"
const POST = "SELECT clave FROM DOCENTES WHERE (id_docente=?)"

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
        const { id_docente, clave } = req.body

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(POST, [id_docente], (err, rows) => {
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
                                res.send({ valido: true, mensaje: "docente validado" })
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
    getTodosLosMateriales: (req, res) => {

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