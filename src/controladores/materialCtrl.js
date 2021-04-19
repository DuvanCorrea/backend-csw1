const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const GETONE = "SELECT * FROM MATERIALES WHERE (id=?)" // selecciona el material de un docente
const GETALL = "SELECT * FROM MATERIALES"
const POST = "INSERT INTO MATERIALES (titulo_material,link_material,fecha_material,link_archivo_material,DOCENTES_id_docente,publicado) VALUES (?,?,?,?,?,?)"
const DELETE = "DELETE FROM MATERIALES WHERE (id=?)"

// controlador de autenticacion de usuario
// ---------------------------------------
const materialCtrl = {

    // Metodo para consulta un solo material
    // -------------------------------------
    getUnMaterial: (req, res) => {

        // se extrae la informacion enviada desde front
        // --------------------------------------------
        const { id_material } = req.params

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(GETONE, [id_material], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                    } else {
                        if (rows.length <= 0) {
                            res.status(404)
                            res.send({ respuesta: "material no encontrado", descripcion: "no se encontro el material en la base de datos" })
                        } else {

                            res.send(rows[0])

                        }
                    }
                })
            }
        })

    },

    // metodo para agragar material
    // ----------------------------
    post: (req, res) => {

        // se extrae la informacion enviada desde front
        // --------------------------------------------
        const {
            titulo_material,
            link_material,
            fecha_material,
            link_archivo_material,
            DOCENTES_id_docente,
            publicado } = req.body

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(POST, [titulo_material,
                    link_material,
                    fecha_material,
                    link_archivo_material,
                    DOCENTES_id_docente,
                    publicado], (err, rows) => {
                        if (err) {
                            console.log(err)
                            res.status(500)
                            res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                        } else {
                            res.send({
                                id: rows.insertId, titulo_material,
                                link_material,
                                fecha_material,
                                link_archivo_material,
                                DOCENTES_id_docente,
                                publicado
                            })
                        }
                    })
            }
        })
    },

    // metodo para eliminar materiales
    // -------------------------------
    delete: (req, res) => {

        // se extrae la información enviada desde front
        // --------------------------------------------
        const { id_material } = req.params

        db.getConnection((err, conn) => {
            if (err) {
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos" })
            } else {
                conn.query(DELETE, [id_material], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al eliminar informacion a la bd" })
                    } else {
                        if (rows.affectedRows > 0) {
                            res.send({ respuesta: "eliminado", descripcion: "El material ha sido eliminada" })
                        } else {
                            res.status(404)
                            res.send({ respuesta: "error", descripcion: "El material no fue encontrada" })
                        }
                    }
                })
            }
        })
    },


    // Metodo para consulta todos los materiales
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

module.exports = materialCtrl