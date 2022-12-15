import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    id, author, title, category,
  } = book;

  const handleRemove = () => {
    dispatch(removeBooks(id));
  };

  const complete = Math.floor(Math.random() * 100);
  const percentageComplete = `${complete}%`;
  const currentChapterNumber = `CHAPTER ${Math.floor(complete / 5, 0)}`;
  return (

    <li key={id}>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <div className="book-category">
              {category}
            </div>

            <div className="book-title">
              {title}
            </div>

            <div className="book-author">
              {author}
            </div>

            <div className="container-buttons">
              <button className="action-button" type="button">Comments</button>
              <div className="vertical-divider" />
              <button className="action-button" type="button" onClick={handleRemove}>Remove</button>
              <div className="vertical-divider" />
              <button className="action-button" type="button">Edit</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-statistics">
              <p className="percent-complete">{percentageComplete}</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
          </div>
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter-number">{currentChapterNumber}</p>
            </div>
            <button className="update-progress-button" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </li>

  );
}

export default Book;

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    author: '',
  },
};

Book.propTypes = {
  book:
    PropTypes.objectOf(
      {
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
};
