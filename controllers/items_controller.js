const {
  addItem,
  updateItem,
  deleteItem,
  getAllItems
} = require("../utils/item_utilities");

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

const removeItem = function(req, res) {
  if (req.error) {
    res.status(req.error.status);
    res.send(req.error.message);
  } else {
    deleteItem(req.params.id).exec(err => {
      if (err) {
        res.status(500);
        res.json({
          error: err.message
        });
      }
      res.sendStatus(204);
    });
  }
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

const modifyItem = function(req, res) {
  if (req.error) {
    res.status(req.error.status);
    res.send(req.error.message);
  } else {
    updateItem(req).exec((err, post) => {
      if (err) {
        res.status(500);
        res.json({
          error: err.message
        });
      }
      res.status(200);
      res.send(post);
    });
  }
};

module.exports = {
  newItem,
  removeItem,
  modifyItem,
  getItems
};
