const express = require("express");
const router = express.Router();
const { newItem, modifyItem } = require("../controllers/items_controller");

//CREATE ITEM
router.post("/", newItem);

//UPDATE ITEM
router.put("/:id", modifyItem);

module.exports = router;
