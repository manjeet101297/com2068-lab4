var mongoose = require( 'mongoose' )
// all model classes will inherit from
// the mongoose.Schema class
var bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter name of the book.'
  },
  author: {
    type: String,
    required: 'Please enter name of the author.'
  },
  year: {
    type: Number,
    required: 'Please enter year of book.'
  },
  price: {
    type: Number,
    required: 'Please enter price of the book.'
  }
})
// make this class public
module.exports = mongoose.model( 'Book', bookSchema )
