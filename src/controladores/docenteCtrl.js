const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const GETONE = "SELECT * FROM DOCENTES WHERE (id_docente=?)"

// controlador de autenticacion de usuario
// ---------------------------------------
const docenteCtrl = {

    // metodo para autenticar usuario
    // ----------------------------------------------------------

    getOne: (req, res) => {

        // console.log("entro")

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
                            res.send(rows)
                        }
                    }
                })
            }
        })
    }


}

module.exports = docenteCtrl