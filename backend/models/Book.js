const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  embedding: { type: [Number], required: false } // For storing BERT embeddings later
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
