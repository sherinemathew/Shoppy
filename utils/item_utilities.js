const Item = require("../models/item");

const addItem = function(req) {
  return new Item(req.body);
};

const getAllItems = function(req) {
  return Item.find();
};

module.exports = {
  addItem,
  getAllItems
};
