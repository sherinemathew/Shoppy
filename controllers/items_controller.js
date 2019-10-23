const { addItem, getAllItems } = require("../utils/item_utilities");

const newItem = function(req, res) {
  addItem(req).save((err, post) => {
    if (err) {
      res.status(500);
      res.json({
        error: err.message
      });
    }
    res.status(201);
    res.send(post);
  });
};

const getItems = function(req, res) {
  getAllItems(req).exec((err, items) => {
    if (err) {
      res.status(500);
      res.json({
        error: err.message
      });
    }
    res.send(items);
  });
};

module.exports = {
  newItem,
  getItems
};
