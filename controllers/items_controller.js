const { addItem, deleteItem } = require("../utils/item_utilities");

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


const removeItem = function (req, res) {
  if (req.error) {
      res.status(req.error.status);
      res.send(req.error.message);
  } else {
      deleteItem(req.params.id).exec((err) => {
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

module.exports = {
  newItem,
  removeItem
};
