const express = require("express");
const { ProductsFieldbyAdmin, getadminProducts, update, getadminproductbycategory } = require("../controller/ProductsFieldbyAdmin");
const { requiredsignin, verifyadmin } = require("../common-middleware/index");
const router = express.Router();

router.post("/product/admin/create", ProductsFieldbyAdmin);
router.put("/product/admin/update", requiredsignin, verifyadmin, update);
router.get("/product/admin/category", requiredsignin, verifyadmin, getadminproductbycategory);
router.get("/admin/getProducts1", requiredsignin, verifyadmin, getadminProducts);


module.exports = router;