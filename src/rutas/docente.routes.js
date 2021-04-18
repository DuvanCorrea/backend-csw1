const express = require("express")
const router = express.Router()
const docenteCtrl = require("../controladores/docenteCtrl")

router.get("/docente/:id_docente", docenteCtrl.getUnSoloDocenteSinMaterialNiReconocimiento)
router.post("/docente/login", docenteCtrl.post)
router.get("/docente", docenteCtrl.getTodosLosDocentesSinMaterialNiReconocimiento)


module.exports = router

