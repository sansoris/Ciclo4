const express = require("express");
const router = express.Router();
const recomendadosController = require("../controllers/recomendados.controller")

router.post("/", recomendadosController.create)
router.get("/", recomendadosController.find)
router.get("/:id", recomendadosController.findOne)
router.put("/:id", recomendadosController.update)
router.delete("/:id", recomendadosController.remove)

module.exports = router