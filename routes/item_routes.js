const express = require("express");
const router = express.Router();
const { newItem, removeItem } = require("../controllers/items_controller");
// const { removeItems } = require("../controllers/items_controller");

//CREATE ITEM
router.post("/", newItem);
router.delete('/:id', removeItem);

module.exports = router;
