const express = require("express");
const router = express.Router();
const {
  newItem,
  removeItem,
  modifyItem,
  getItems
} = require("../controllers/items_controller");
// const { removeItems } = require("../controllers/items_controller");

//CREATE ITEM
router.post("/", newItem);

// DELETE ITEM
router.delete("/:id", removeItem);

// GET ITEMS
router.get("/", getItems);
//UPDATE ITEM
router.put("/:id", modifyItem);

module.exports = router;
