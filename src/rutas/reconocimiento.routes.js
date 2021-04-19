const express = require("express")
const router = express.Router()
const reconocimientoCtrl = require("../controladores/reconocimientoCtrl")


// router.post("/reconocimiento", reconocimientoCtrl.post)
// router.delete("/reconocimiento/:id_reconocimiento", reconocimientoCtrl.delete)
router.get("/reconocimiento/:id_reconocimiento", reconocimientoCtrl.getUno)
router.get("/reconocimiento", reconocimientoCtrl.getTodos)


module.exports = router

