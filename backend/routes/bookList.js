const router = require('express').Router();
const BookModel = require('../models/bookModel.js');

// @route GET /
// @description Get all books
router.route('/').get((req, res) => {
  BookModel.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json(`Server Error`));
});

// @route GET /:id
// @description Get single books by id
router.route('/:id').get((req, res) => {  
  BookModel.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json(`Server Error`))
});

// @route POST /
// @description add/save book
router.route('/').post(async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const pages = req.body.pages
  const newBook = new BookModel({
    title,
    author,
    description,
    pages
  })

  newBook
  .save()
  .then(()=>res.json('new book added!'))
  .catch((err) => res.status(404).json(`Server Error`));

});

// @route POST /:id
// @description Update book by id
router.route('/:id').post(async (req, res) => {
  BookModel.findById(req.params.id)
      .then((bookforeupdate) => {
        bookforeupdate.title = req.body.title;
        bookforeupdate.author = req.body.author;
        bookforeupdate.description = req.body.description;
        bookforeupdate.pages = req.body.pages
        bookforeupdate
          .save()
          .then(() => res.json('Book updated!'))
          .catch((err) => res.status(404).json('Server Error'));
      })
      .catch((err) => res.status(404).json('Server Error'));
});

// @route DELETE /:id
// @description Delete book by id
router.route('/:id').delete(async (req, res) => {  
    BookModel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(404).json('Server Error'));
});

module.exports = router;
