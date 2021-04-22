const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const POST = "SELECT * FROM DOCENTES WHERE (correo=?)"
const UPDATE = "UPDATE MATERIALES SET link_archivo_material=? WHERE id=?;"

const docenteCtrl = {

    post: (req, res) => {

        const { id_material } = req.params
        console.log(id_material)

        let documento = req.files.documento
        let documentoNombre = documento.name

        console.log(documentoNombre)

        const ruta = `src/documentos/` + id_material + " " + documentoNombre

        documento.mv(ruta, (err) => {
            if (err) res.send(err)
            else res.send("documento creado")
        })

        db.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
            } else {
                conn.query(UPDATE, [ruta, id_material], (err, rows) => {
                    if (err) {
                        res.status(500)
                        res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
                    } else {
                        if (rows.length <= 0) {
                            res.status(404)
                            res.send({ respuesta: "Archivo creado" })
                        } else {

                        }
                    }
                })
                conn.release();
            }
        })
    },



}

module.exports = docenteCtrl