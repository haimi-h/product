const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let productSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  available: {
    type: Boolean
  },
}, {
    collection: 'products'
  })
module.exports = mongoose.model('Product', productSchema)