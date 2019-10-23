const { addItem, updateItem } = require("../utils/item_utilities");


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

const modifyItem = function (req, res) {
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
  modifyItem
};
