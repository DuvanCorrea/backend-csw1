const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const GETONE = "SELECT * FROM DOCENTES WHERE (id_docente=?)"

// controlador de autenticacion de usuario
// ---------------------------------------
const categoriaCtrl = {

    // metodo para autenticar usuario
    // ----------------------------------------------------------

    getOne: (req, res) => {

        // se extrae la informacion enviada desde front
        // --------------------------------------------
        const { id_docente } = req.params

        db.getConnection((err, conn) => {
            if (err) {
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos" })
            } else {
                conn.query(GETONE, [id_categoria], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al consultar la base de datos" })
                    } else {
                        if (rows.length <= 0) {
                            res.status(404)
                            res.send({ respuesta: "categoria no encontrada", descripcion: "no se encontro la categoria en la base de datos" })
                        } else {
                            res.send(rows)
                        }
                    }
                })
            }
        })
    }


}

module.exports = categoriaCtrl