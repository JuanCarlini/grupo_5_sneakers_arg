// Multer - express:
const express = require ('express');
const router = express.Router();


// Controllers:
const controlador = require('../controllers/mainController.js')
const usuariosController = require("../controllers/usuariosController");
const productosController = require("../controllers/productosController")


// Middleweres:
const uploadImage = require("../middlewares/profileImages");
const validationsRegister = require('../middlewares/validateRegister');
const validationsLogin = require('../middlewares/ValidateLogin.js');
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')


// API
// Users
router.get('/api/users', usuariosController.users)
router.get('/api/users/:id', usuariosController.userId)

// Products
router.get('/api/products', productosController.products)
router.get('/api/users/:id', productosController.productsId)



// Routes
// Home
router.get('/', controlador.home);

// Login
router.get('/log-in', guestMiddleware, usuariosController.login);
router.get('/UserProfile',authMiddleware, usuariosController.userProfile)
router.post("/log-in", validationsLogin, usuariosController.loginProcess)

// Logout
router.get('/log-out', usuariosController.logout)

//Register
router.get('/register', guestMiddleware, usuariosController.register); 
router.post("/register", uploadImage.single("avatar"), validationsRegister, usuariosController.registerProcess)

//Carrito
router.get('/carrito', controlador.carrito);

//Detalle del producto
router.get("/detalle-del-producto/:id", productosController.detail); 

// Todos los productos
router.get('/products', productosController.index);




module.exports = router;