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



// Routes:

// Home
router.get('/', controlador.home);

// Login
router.get('/log-in',controlador.login);
router.post("/log-in", validationsLogin, usuariosController.login)

//Register
router.get('/register', controlador.register); 
router.post("/register", uploadImage.single("avatar"), validationsRegister, usuariosController.register)

//Carrito
router.get('/carrito',controlador.carrito);

//Detalle del producto
router.get("/detalle-del-producto/:id", controller.detail); 

// Todos los productos
router.get('/products',controller.index);




module.exports = router;