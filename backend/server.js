const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/Book.js');  // Import the Book model (adjust the path if needed)
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookRecommendationApp', {
  
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Route: Add a new book
app.post('/add-book', async (req, res) => {
  const { title, author, description, genre, rating } = req.body;

  try {
    // Create a new Book instance
    const newBook = new Book({ title, author, description, genre, rating });

    // Save the book to MongoDB
    await newBook.save();

    res.json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
});

// Route: Get all books
app.get('/books', async (req, res) => {
  try {
    // Fetch all books from MongoDB
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error });
  }
});

// Change the port here
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
