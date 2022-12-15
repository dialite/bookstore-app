import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookFromAPI } from '../../redux/books/books';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.Books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookFromAPI());
  }, [dispatch]);

  return (
    <ul className="books">
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

export default BookList;
