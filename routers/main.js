const express = require ('express');

const multer = require("multer");

const path = require("path");

const router = express.Router();

const controlador = require('../controllers/mainController.js')

const controller = require('../controllers/productsController.js')

const controladorAdmin = require('../controllers/adminController.js')

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


router.get('/', upload.single(""), controlador.home);

router.get('/log-in',controlador.login);

router.post("/log-in", [
    check("email").isEmail().withMessage("Email invalido"),
    check("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
] ,controlador.processLogin)

router.get('/register',controlador.register);

router.get('/carrito',controlador.carrito);

router.get('/products/:id', controller.detail); 

router.get('/admin',controladorAdmin.admin);

router.get("/edit", controlador.edit);

router.get("/detail", controller.detail);

// Products:

router.get('/products',controller.index);

router.get("/product/create", controller.create);

router.post("/products/create", upload.single("product-image"), controller.store);



module.exports = router;