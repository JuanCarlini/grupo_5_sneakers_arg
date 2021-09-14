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

router.get('/register',controlador.register);

router.get('/carrito',controlador.carrito);

router.get('/products/:id', controller.detail); 

router.get('/admin',controladorAdmin.admin);

router.get("/create", controller.create);

router.get("/edit", controlador.edit);

router.get("/detail", controller.detail);

// Products:

router.get('/products',controller.index);

router.post("/products", upload.single("product-image"), controller.store);



module.exports = router;