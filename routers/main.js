// Multer - express:

const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");

// Express Validator:

const { body } = require('express-validator');

// Controllers:

const controlador = require('../controllers/mainController.js')
const controller = require('../controllers/productsController.js')
const controladorAdmin = require('../controllers/adminController.js')

// Middleweres:

const uploadImage = require("../middlewares/profileImages");

// Multer Upload products images:

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'));
    } ,

    filename: function(req, file, cb) {
        const newFileName = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

const upload = multer({storage});

// Validations register form:

const validations =  [
    body ('name').notEmpty().withMessage("Nombre no puede estar vacio"),
    body ('surname').notEmpty().withMessage("Apellido no puede estar vacio"),
    body ('user').notEmpty().withMessage("Nombre de usuario no puede estar vacio"),
    body ('pass').notEmpty().withMessage("Contraseña no puede estar vacio"),
    body ('confirm-pass').notEmpty().withMessage("Confirmar contraseña no puede estar vacio"),
   ];

// Route register form:

router.post("/register", uploadImage.single("avatar"), validations ,controlador.processRegister);

// Routes:

router.get('/', controlador.home);
router.get('/log-in',controlador.login);
router.post("/user/login" ,controlador.processLogin)
router.get('/register', controlador.register); 
router.get('/carrito',controlador.carrito);
router.get('/admin',controladorAdmin.admin);
router.get("/detail", controller.detail);

// Products:

router.get('/products',controller.index);
router.get("/product/create", controller.create);
router.get('/products/:id', controller.detail); 
router.post("/product/create", upload.single("product-image"), controller.store);
router.get("/products/:id/edit", controller.edit);
router.put("/products/:id/edit", upload.single("product-image") ,controller.update);
router.delete("/products/:id", controller.destroy);

// Exports:

module.exports = router;