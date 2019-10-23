const express = require("express");
const router = express.Router();
const { newItem } = require("../controllers/items_controller");

//CREATE ITEM
router.post("/", newItem);

module.exports = router;
