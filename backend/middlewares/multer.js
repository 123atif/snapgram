const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
    //storing images by id
});

const upload = multer({
    storage: storage,
    limits: { fileSize: '16000000'}, // 16 MB
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

        if(mimeType && extname){
            return cb(null, true);
        }
        cb('Please upload image file only');
    }
})


module.exports = upload;