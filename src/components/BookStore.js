import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BookList from './BookList';
import Categories from './Categories';

function BookStore() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </Router>
  );
}

export default BookStore;
