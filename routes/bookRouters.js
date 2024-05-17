const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')
const Book = require('../models/Book')

router.post('/add-book', bookController.createBook)

router.get('/all-books', bookController.getBooks)

router.get('/book/:id', bookController.getSingleBook)

router.put('/update/:id', bookController.updateBook)

router.delete('/delete/:id', bookController.deleteBook)

module.exports = router