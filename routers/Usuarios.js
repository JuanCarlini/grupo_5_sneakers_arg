const express = require('express');
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

// Create

router.get("/crear", usuariosController.crear)

module.exports = router;