var Book = require( '../models/book' )
// our index function
exports.index = function( req, res ) {
  // create our locals parameter
  locals = {
    title: 'Books List'
  }
  Book.find().then( function (books) {
    // add the books to our locals
    locals.books = books
    // render our view
    res.render( 'books/index', locals )
  })

}
// New
exports.new = function ( req, res ) {
  // locals
  locals = {
    title: 'New Book'
  }
  res.render( 'books/new', locals )
}
// Create
exports.create = function ( req, res, next ) {
  Book.create({
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    price: req.body.price
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
}
// Show
exports.show = function ( req, res ) {
  // locals
  locals = {
    title: 'Book'
  }
  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    // add the books to our locals
    locals.book = book
    // render our view
    res.render( 'books/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
}
// Edit
exports.edit = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Edit Book'
  };
  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    // add the books to our locals
    locals.book = book;
    // render our view
    res.render( 'books/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};
// Update
exports.update = function ( req, res, next ) {
  Book.findById( req.params.id )
  .then(function ( book ) {
    book.name = req.body.name
    book.author = req.body.author
    book.year = req.body.year
    book.price = req.body.price
    book.save()
    .then(  function () {
      res.redirect( '/books' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
}
// Delete
exports.delete = function ( req, res, ) {
  Book.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
}
