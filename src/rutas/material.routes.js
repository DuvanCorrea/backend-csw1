const express = require("express")
const router = express.Router()
const materialCtrl = require("../controladores/materialCtrl")

// router.get("/material/:id_docente", docenteCtrl.getUnSoloDocenteSinMaterialNiReconocimiento)
// router.post("/material/login", materialCtrl.post)
router.post("/material", materialCtrl.post)
router.delete("/material/:id_material", materialCtrl.delete)
router.get("/material/:id_material", materialCtrl.getUnMaterial)
router.get("/material", materialCtrl.getTodosLosMateriales)


module.exports = router

