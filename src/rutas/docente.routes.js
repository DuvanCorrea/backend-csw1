const express = require("express")
const router = express.Router()
const docenteCtrl = require("../controladores/docenteCtrl")

router.post("/docente", docenteCtrl.post)

module.exports = router