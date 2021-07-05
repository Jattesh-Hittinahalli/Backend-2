const express = require("express");
const { createproduct, update, getproduct, deleteproduct } = require("../controller/products");
// const { requiredsignin, verifyadmin } = require("../common-middleware/index");
const router = express.Router();

router.post("/product/create", createproduct);
router.put("/product/update", update);
router.get("/product/list", getproduct);
router.delete("/product/delete", deleteproduct);

module.exports = router;
