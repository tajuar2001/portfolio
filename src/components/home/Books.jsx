// src/components/home/Books.jsx
import React from 'react';
import './books.css';

const Books = ({ books }) => {
  return (
    <section id="books">
      <h2>What I'm Reading Now</h2>
      <div className="books-container">
        {books.map((book, index) => (
          <div key={index} className="book">
            <img src={book.image} alt={`${book.title} cover`} className="book-image" />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>About:</strong> {book.about}</p>
              <p><strong>Published:</strong> {book.publicationDate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
