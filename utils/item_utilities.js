const Item = require("../models/item");

const addItem = function(req) {
  return new Item(req.body);
};

module.exports = {
  addItem
};
