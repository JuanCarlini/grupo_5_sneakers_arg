const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/profileImages'));
    } ,

    filename: function(req, file, cb) {
        const newFileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, newFileName);
    }
})

const uploadImage = multer({ storage })

module.exports = uploadImage;


