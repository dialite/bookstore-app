import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';
import ProgressBar from './ProgressBar';
import Chapter from './Chapter';
import '../styles/Book.css';

function Book(props) {
  const dispatch = useDispatch();
  const limit = Math.floor(Math.random() * 100);
  const {
    id, title, author, category,
  } = props;

  const bookRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div className="book-container">
        <div className="book-info">
          <p className="cate">{category}</p>
          <h2 className="title">{title}</h2>
          <h3 className="author">{author}</h3>
          <div className="btn-control">
            <button type="button">Comment</button>
            <div className="divider" />
            <button type="button" onClick={bookRemove}>
              Remove
            </button>
            <div className="divider" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="chapter">
          <ProgressBar limit={limit} />
          <Chapter />
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
