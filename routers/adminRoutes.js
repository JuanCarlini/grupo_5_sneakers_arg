// Requires:
const express = require ('express');
const router = express.Router();
const adminController = require("../controllers/adminController")
const path = require("path");
const multer = require("multer");

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


// Home route:

router.get('/',adminController.admin);

// Create:
router.get("/create", adminController.create);
router.post("/create", upload.single("productimage"), adminController.crear);


// Update:
router.get("/edit/:id", adminController.edit);
router.put("/products/update/:id", upload.single("productimage") ,adminController.update);  

// Products Route:
router.get("/products", adminController.productList)
 
module.exports = router;
