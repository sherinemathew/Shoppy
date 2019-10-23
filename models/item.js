const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: String,
    price: {
        type: Number,
        required: true
    },
    description: String,
    category: {
        type: String,
        enum:['Aviator ','Round','Square', 'Wrap Aound', 'Cat-Eye']
    }
});

module.exports = mongoose.model('Item', Item);