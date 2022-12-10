import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const newBookState = {
  title: '',
  author: '',
};

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, changeBook] = useState(newBookState);

  const changeTitle = (event) => {
    changeBook({
      ...book,
      title: event.target.value,
    });
  };

  const changeAuthor = (event) => {
    changeBook({
      ...book,
      author: event.target.value,
    });
  };

  const addNewBook = (event) => {
    event.preventDefault();
    const author = (book.author || '').trim();
    const title = (book.title || '').trim();
    if (author + title !== '') {
      const newBook = {
        id: uuidv4(),
        author,
        title,
      };
      dispatch(addBook(newBook));
      changeBook(newBookState);
    }
  };

  return (
    <div>
      <h3>Add new book</h3>
      <form onSubmit={addNewBook}>
        <input
          type="text"
          id="title"
          placeholder="Book Title"
          value={book.title}
          onChange={changeTitle}
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={book.author}
          onChange={changeAuthor}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
