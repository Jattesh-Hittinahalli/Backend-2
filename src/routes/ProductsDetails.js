const express = require('express');
const { createProduct, getProducts, Sendmail } = require('../controller/ProductsDetails');
const router = express.Router();
var multer = require("multer");
var path = require('path');
const pa = path.join(__dirname, "uploads")
console.log(pa)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads"));
      },
    filename: (req, files, cb) => {
        cb(null, "img" + Date.now() + files.originalname);
    },
    pathName: (req, files, cb) => {
        cb(null, pa + files.originalname);
    }
});
var upload = multer({ storage: storage });


router.post('/CreateProduct1', upload.single("productimage", 10), createProduct);
router.get("/getProducts", getProducts);
router.post("/SendMail", Sendmail);


module.exports = router;