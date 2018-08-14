var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'MS Book Store',
    cards: [
      {
        cardTitle: 'Available Books',
        cardBody: 'Show all the books available online',
        cardLink: {
          linkLabel: 'All Books',
          linkHREF: '/books'
        }
      },
      {
        cardTitle: 'Add Book',
        cardBody: 'Add a new book to the store',
        cardLink: {
          linkLabel: 'Add New Book',
          linkHREF: '/books/new'
        }
      }
    ]
  });
});

module.exports = router;
