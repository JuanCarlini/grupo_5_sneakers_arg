// Requires:
const express = require ('express');
const router = express.Router();
const adminController = require("../controllers/adminController")
const path = require("path");
const multer = require("multer");

// Middlewares:

const validationsCreate = require("../middlewares/ValidateCreateProducts")
const validationsUpdate = require("../middlewares/ValidateUpdateProducts")
const authAdmin = require("../middlewares/authAdminMiddleware")

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

router.get('/',authAdmin, adminController.admin);

// Create:
router.get("/create", adminController.create);
router.post("/create", upload.single("productimage"), validationsCreate, adminController.crear);


// Update:
router.get("/edit/:id", adminController.edit);
router.put("/products/update/:id", upload.single("productimage"), validationsUpdate, adminController.update);  

// Delete:
router.post("/borrar/:id", adminController.delete)

// Products Route:
router.get("/products", adminController.productList)
 
module.exports = router;
