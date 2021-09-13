const express = require ('express');

const multer = require("multer");

const path = require("path");

const router = express.Router();

const controlador = require('../controllers/mainController.js')

const controller = require('../controllers/productsController.js')

const controladorAdmin = require('../controllers/adminController.js')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..."))
    },
    filename: (req, file, cb) => {
        const newFileName = "";
        cb(null)
    }
});

const upload = multer({storage});


router.get('/', upload.single(""), controlador.home);

router.get('/log-in',controlador.login);

router.get('/register',controlador.register);

router.get('/carrito',controlador.carrito);

router.get('/products/:id', controller.detail); 

router.get('/admin',controladorAdmin.admin);

router.get("/product/create", controller.create);

router.get("/edit", controlador.edit);

router.get("/detail", controller.detail);

// Products:

router.get('/products',controller.index);

router.post("/products", upload.single("product-image"), controller.store);



module.exports = router;