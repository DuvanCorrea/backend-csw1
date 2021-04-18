const express = require("express")
const router = express.Router()
const docenteCtrl = require("../controladores/docenteCtrl")

router.get("/docente/:id_docente", docenteCtrl.getOne)

module.exports = router