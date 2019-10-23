const Item = require("../models/item");

const addItem = function(req) {
  return new Item(req.body);
};

const deleteItem = function(id) {
  return Item.findByIdAndRemove(id);
};

const updateItem = function(req) {
  return Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
};

const getAllItems = function(req) {
  return Item.find();
};

module.exports = {
  addItem,
  deleteItem,
  updateItem,
  getAllItems
};
