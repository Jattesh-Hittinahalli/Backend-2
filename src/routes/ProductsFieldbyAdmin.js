const express = require("express");
const { ProductsFieldbyAdmin } = require("../controller/ProductsFieldbyAdmin");
// const { requiredsignin, verifyadmin } = require("../common-middleware/index");
const router = express.Router();

router.post("/product/admin/create", ProductsFieldbyAdmin);


module.exports = router;