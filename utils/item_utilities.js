const Item = require("../models/item");

const addItem = function(req) {
  return new Item(req.body);
};

const updateItem = function(req){
    return Item.findByIdAndUpdate(req.params.id, req.body,{new: true});
}

module.exports = {
  addItem,
  updateItem
};
