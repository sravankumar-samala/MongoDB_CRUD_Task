const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    // name, image, summary
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
    }
})

module.exports = mongoose.model('Book', bookSchema)