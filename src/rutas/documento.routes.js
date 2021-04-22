const express = require("express")
const router = express.Router()
const documentoCtrl = require("../controladores/documentoCtrl")

router.post("/material/documento/:id_material", documentoCtrl.post)
router.get("/material/documento/:nombre_documento", documentoCtrl.get)

module.exports = router

