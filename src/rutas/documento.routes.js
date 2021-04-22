const express = require("express")
const router = express.Router()
const documentoCtrl = require("../controladores/documentoCtrl")

router.post("/material/documento/:id_material", documentoCtrl.post)

module.exports = router

