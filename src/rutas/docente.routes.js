const express = require("express")
const router = express.Router()
const categoriaCtrl = require("../controladores/docenteCtrl")

router.get("/categoria/:id_docente", categoriaCtrl.getOne)


module.exports = router