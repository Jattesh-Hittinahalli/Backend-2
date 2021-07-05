const express = require("express");
const { CreateProduct, getallproduct, getproductbycategory } = require("../controller/Product");
// const { requiredsignin, verifyadmin } = require("../common-middleware/index");
const router = express.Router();

router.post("/product1/create", CreateProduct);
// router.put("/product/update", update);
router.get("/product1/list", getallproduct);
router.get("/product1/category", getproductbycategory);
// router.delete("/product/delete", deleteproduct);

module.exports = router;