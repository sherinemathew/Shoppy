const Item = require("../models/item");

const deleteItem = function (id) {
  return Item.findByIdAndRemove(id);
}

const addItem = function(req) {
  return new Item(req.body);
};

module.exports = {
  addItem,
  deleteItem
};
