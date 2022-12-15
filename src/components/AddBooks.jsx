import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../styles/AddBooks.css';

export default function AddBook() {
  const dispatch = useDispatch();

  const [bookValues, setBookValues] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setBookValues({
      ...bookValues,
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = document.getElementsByName('title')[0].value;
    const author = document.getElementsByName('author')[0].value;
    const category = document.getElementsByName('category')[0].value;

    if (!title.length > 0 || !author.length > 0) return;
    const book = {
      title: bookValues.title,
      author: bookValues.author,
      category: bookValues.category,
      id: uuidv4(),
    };

    dispatch(addBook(book));
    setBookValues({
      title: '',
      author: '',
      category,
    });
  };
  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={addBookHandler}>
        <input
          type="text"
          required
          value={bookValues.title}
          onChange={handleChange}
          placeholder="Book title"
          name="title"
        />
        <input
          type="text"
          required
          value={bookValues.author}
          onChange={handleChange}
          placeholder="Book author"
          name="author"
        />
        <label htmlFor="category-select">
          <select
            onChange={handleChange}
            id="category-select"
            name="category"
            value={bookValues.category}
            required
          >
            <option disabled> Book </option>
            <option value="fiction"> Fiction </option>
            <option value="action"> Action </option>
            <option value="suspense"> Suspense </option>
            <option value="romance"> Computer Programming </option>
            <option value="adventure"> Adventure </option>
            <option value="sci-fi"> Science Fiction </option>
            <option value="history"> History </option>
            <option value="thriller"> Thriller </option>
            <option value="physics"> Physics </option>
          </select>
        </label>
        <button type="submit" className="add-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
