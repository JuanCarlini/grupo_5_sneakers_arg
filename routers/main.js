// Multer - express:

const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");



// Controllers:

const controlador = require('../controllers/mainController.js')
const usuariosController = require("../controllers/usuariosController");
const controller = require("../controllers/productosController")

// Middleweres:

const uploadImage = require("../middlewares/profileImages");
const validations = require('../middlewares/validateRegisterMiddleware');


// Routes:

// Home
router.get('/', controlador.home);

// Login
router.get('/log-in',controlador.login);
router.post("/user/login" ,controlador.processLogin)

//Register
router.get('/register', controlador.register); 
router.post("/register", uploadImage.single("avatar"), validations, usuariosController.crear)

//Carrito
router.get('/carrito',controlador.carrito);

//Detalle del producto
router.get("/detail", controller.detail); 

// Todos los productos
router.get('/products',controller.index);




module.exports = router;