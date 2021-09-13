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

router.get("/create", controlador.create);

router.get("/edit", controlador.edit);

// Products:

router.get('/products',controller.index);




module.exports = router;