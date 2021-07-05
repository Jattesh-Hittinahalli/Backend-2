const express = require("express");
const { create_category, get_category, deletecategory } = require("../controller/category");
const { requiredsignin, verifyadmin } = require("../common-middleware/index");
const router = express.Router();

router.post("/category/create", create_category);
router.get("/category/list", get_category);
router.delete("/category/delete", deletecategory);

module.exports = router;
