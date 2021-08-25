const express = require ('express');

const router = express.Router();

const controlador = require('../controllers/mainController.js')

const controladorAdmin = require('../controllers/adminController.js')




router.get('/',controlador.home);

router.get('/log-in',controlador.login);

router.get('/register',controlador.register);

router.get('/carrito',controlador.carrito);

router.get('/detalle-del-producto',controlador.detalleDelProducto);

router.get('/admin',controladorAdmin.admin);


module.exports = router;