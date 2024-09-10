const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let books = [];

// Route: Add a new book
app.post('/add-book', (req, res) => {
  const { title, author, description, genre, rating } = req.body;
  const newBook = { title, author, description, genre, rating };
  books.push(newBook);
  res.json({ message: 'Book added successfully', book: newBook });
});

// Route: Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Change the port here
const PORT = 5001;  // You can use any available port like 5001, 5002, etc.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
