const { addItem } = require("../utils/item_utilities");

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

module.exports = {
  newItem
};
