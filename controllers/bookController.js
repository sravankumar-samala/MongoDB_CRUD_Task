const Book = require('../models/Book')

const createBook = async (req, res) => {
    try {
        const { name, img, summary } = req.body

        const book = new Book({
            name,
            img,
            summary,
        })
        await book.save()
        res.status(201).json(book)

    } catch (error) {
        console.log("Error", error)
        res.send(500).json({ message: 'Server Error' })
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(201).json(books)
    } catch (error) {
        console.log("Error", error)
        res.send(500).json({ message: 'Server Error' })
    }
}

const getSingleBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(404).json({ message: 'Book not found' })
        }
        res.status(200).json(book)
    } catch (error) {
        console.log("Error", error)
        res.send(500).json({ message: 'Server Error' })
    }
}


const updateBook = async (req, res) => {
    try {
        const { name, img, summary } = req.body
        const myBook = await Book.findByIdAndUpdate(req.params.id, { name, img, summary })
        if (!myBook) {
            return res.status(404).send({ message: 'Book not found' })
        }
        res.status(200).json(myBook)
    } catch (error) {
        console.log("Error", error)
        res.send(500).json({ message: 'Server Error' })
    }
}

const deleteBook = async (req, res) => {
    try {
        const delBook = await Book.findByIdAndDelete(req.params.id)
        if (!delBook) {
            return res.status(404).send({ message: 'Book not found' })
        }
        res.status(204).json({ message: 'Book deleted successfully' })
    } catch (error) {
        console.log("Error", error)
        res.send(500).json({ message: 'Server Error' })
    }
}

module.exports = { createBook, getBooks, getSingleBook, updateBook, deleteBook }