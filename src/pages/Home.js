import React from 'react';
import AddBook from '../componenets/Books/AddBook';
import BookList from '../componenets/Books/BookList';

const Home = () => (
  <>
    <BookList />
    <div className="horizontal-divider" />
    <AddBook />
  </>
);
export default Home;
