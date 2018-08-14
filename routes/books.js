var express = require('express')
var router = express.Router()
// create a link to our book model
var booksController = require('../controllers/booksController')

// index (http://my-app.com/books)
router.get( '/', booksController.index );

// new (http://my-app.com/books/new)
router.get( '/new', booksController.new );

// create (http://my-app.com/books)
router.post( '/', booksController.create );

// show (http://my-app.com/books/1245)
router.get( '/:id', booksController.show )

// (http://my-app.com/books/1513/edit)
router.get( '/:id/edit', booksController.edit )

router.post( '/:id/edit', booksController.update )

router.post( '/:id/delete', booksController.delete )

// makes our file public to the application
module.exports = router;
