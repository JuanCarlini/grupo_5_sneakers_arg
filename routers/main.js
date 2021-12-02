// Multer - express:

const express = require ('express');
const router = express.Router();


// Controllers:

const controlador = require('../controllers/mainController.js')
const usuariosController = require("../controllers/usuariosController");
const controller = require("../controllers/productosController")

// Middleweres:

const uploadImage = require("../middlewares/profileImages");
const validationsRegister = require('../middlewares/validateRegister');
const validationsLogin = require('../middlewares/ValidateLogin.js');

// API:

router.get('/users', usuariosController.users)

// Routes:

// Home
router.get('/', controlador.home);

// Login
router.get('/log-in',usuariosController.login);
router.post("/log-in", validationsLogin, usuariosController.loginProcess)

//Register
router.get('/register', usuariosController.register); 
router.post("/register", uploadImage.single("avatar"), validationsRegister, usuariosController.registerProcess)

//Carrito
router.get('/carrito',controlador.carrito);

//Detalle del producto
router.get("/detalle-del-producto/:id", controller.detail); 

// Todos los productos
router.get('/products',controller.index);




module.exports = router;