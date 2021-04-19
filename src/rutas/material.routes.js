const express = require("express")
const router = express.Router()
const materialCtrl = require("../controladores/materialCtrl")

// router.get("/material/:id_docente", docenteCtrl.getUnSoloDocenteSinMaterialNiReconocimiento)
// router.post("/material/login", materialCtrl.post)
router.get("/material", materialCtrl.getTodosLosMateriales)


module.exports = router

