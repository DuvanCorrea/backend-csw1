const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const GETONE = "SELECT * FROM RECONOCIMIENTOS WHERE (id_reconocimiento=?)"
const GETALL = "SELECT * FROM RECONOCIMIENTOS"
const POST = "INSERT INTO RECONOCIMIENTOS (DOCENTES_id_docente,persona_que_otorga,persona_que_recibe,entidada_otorga,razon , anio_reconocimento) VALUES (?,?,?,?,?,?)"
const DELETE = "DELETE FROM RECONOCIMIENTOS WHERE (id_reconocimiento=?)"


const materialCtrl = {

    // Metodo para consulta un solo reconocimeinto
    // -------------------------------------
    getUno: (req, res) => {

        // se extrae la informacion enviada desde front
        // --------------------------------------------
        const { id_reconocimiento } = req.params

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(GETONE, [id_reconocimiento], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                    } else {
                        if (rows.length <= 0) {
                            res.status(404)
                            res.send({ respuesta: "reconocimiento no encontrado", descripcion: "no se encontro el reconocimiento en la base de datos" })
                        } else {

                            res.send(rows[0])

                        }
                    }
                })
            }
        })

    },

    // metodo para agragar reconocimeinto
    // ----------------------------
    post: (req, res) => {

        // se extrae la informacion enviada desde front
        // --------------------------------------------
        const {
            id_docente,
            persona_que_otorga,
            persona_que_recibe,
            entidad_otorga,
            razon,
            anio_reconocimiento } = req.body

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(POST, [id_docente,
                    persona_que_otorga,
                    persona_que_recibe,
                    entidad_otorga,
                    razon,
                    anio_reconocimiento], (err, rows) => {
                        if (err) {
                            console.log(err)
                            res.status(500)
                            res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                        } else {
                            res.send({
                                id: rows.insertId,
                                id_docente,
                                persona_que_otorga,
                                persona_que_recibe,
                                entidad_otorga,
                                razon,
                                anio_reconocimiento
                            })
                        }
                    })
            }
        })
    },

    // metodo para eliminar reconocimeinto
    // -------------------------------
    delete: (req, res) => {

        // se extrae la información enviada desde front
        // --------------------------------------------
        const { id_reconocimiento } = req.params

        db.getConnection((err, conn) => {
            if (err) {
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos" })
            } else {
                conn.query(DELETE, [id_reconocimiento], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al eliminar informacion a la bd" })
                    } else {
                        if (rows.affectedRows > 0) {
                            res.send({ respuesta: "eliminado", descripcion: "El reconocimiento ha sido eliminada" })
                        } else {
                            res.status(404)
                            res.send({ respuesta: "error", descripcion: "El reconocimiento no fue encontrada" })
                        }
                    }
                })
            }
        })
    },


    // Metodo para consulta todos los reconocimeinto
    // ---------------------------------------
    getTodos: (req, res) => {

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

module.exports = materialCtrl