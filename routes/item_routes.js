const express = require("express");
const router = express.Router();
const { newItem, getItems } = require("../controllers/items_controller");

//CREATE ITEM
router.post("/", newItem);

// GET ITEMS
router.get("/", getItems);

module.exports = router;
