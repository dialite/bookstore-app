import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      <ul>
        {books.map((book) => {
          const { id, title, author } = book;
          return (
            <Book
              key={id}
              {...{
                id,
                title,
                author,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
