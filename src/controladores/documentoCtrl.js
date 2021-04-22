const db = require("../database/db")

// quierys para peticiones a la base de datos
// ------------------------------------------
const GETONE = "SELECT id_docente, nombre_completo, correo, anio_nacimiento, areas_conocimiento, materia FROM DOCENTES WHERE (id_docente=?)"
const GETALL = "SELECT * FROM DOCENTES"
const POST = "SELECT * FROM DOCENTES WHERE (correo=?)"

const docenteCtrl = {

    getUnSoloDocenteSinMaterialNiReconocimiento: (req, res) => {

    },

    post: (req, res) => {

        const { id_docente } = req.params
        console.log(id_docente)

        let documento = req.files.documento
        let documentoNombre = documento.name

        console.log(documentoNombre)

        documento.mv(`src/documentos/` + documentoNombre, (err) => {
            if (err) res.send(err)
            else res.send("documento creado")
        })

        // // se extrae la informacion enviada desde front
        // // --------------------------------------------
        // const { correo, clave } = req.body

        // db.getConnection((err, conn) => {
        //     if (err) {
        //         console.log(err)
        //         res.status(500)
        //         res.send({ respuesta: "error", descripcion: "no se pudo conectar a la base de datos (1)" })
        //     } else {
        //         conn.query(POST, [correo], (err, rows) => {
        //             if (err) {
        //                 res.status(500)
        //                 res.send({ respuesta: "error", descripcion: "error al consultar la base de datos (2)" })
        //             } else {
        //                 if (rows.length <= 0) {
        //                     res.status(404)
        //                     res.send({ respuesta: "docente no encontrado", descripcion: "no se encontro el docente en la base de datos" })
        //                 } else {

        //                 }
        //             }
        //         })
        //         conn.release();
        //     }
        // })
    },

}

module.exports = docenteCtrl