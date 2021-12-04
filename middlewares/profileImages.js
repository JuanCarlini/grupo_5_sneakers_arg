// Requires:
const path = require("path");
const multer = require("multer");

// Multer:

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/avatars'));
    } ,

    filename: function (req, file, cb) {
        let FileName = Math.round(Math.random() * 1E9) + '-img' + path.extname(file.originalname)
        cb(null, FileName)
    }
})

const uploadImage = multer({ storage })

module.exports = uploadImage;


