const express = require("express");
const { CreateProduct, getallproduct, getproductbycategory, displayProduct, getDisplayproductbycategory } = require("../controller/Product");
// const { requiredsignin, verifyadmin } = require("../common-middleware/index");
const { requiredsignin, verifyadmin } = require("../common-middleware/index")
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

router.post("/product1/create", CreateProduct);
router.get("/product1/display", requiredsignin, getDisplayproductbycategory);
router.post("/display/product1/create", upload.single("productimage", 10), displayProduct);
// router.put("/product/update", update);
router.get("/product1/list", getallproduct);
router.get("/product1/category", getproductbycategory);
router.get("/product1/category", getproductbycategory);



// router.delete("/product/delete", deleteproduct);

module.exports = router;