import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBooks } from '../../redux/books/books';

function AddBook() {
  const [inputText, setInputText] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
      category: 'default',
    };
    dispatch(addNewBooks(newBook));

    setInputText({
      title: '',
      author: '',
    });
  };
  return (
    <>
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          className="inputTextBox"
          placeholder="Book title"
          value={inputText.title}
          name="title"
          onChange={onChange}
          required
        />
        <input
          type="text"
          className="inputTextBox"
          placeholder="Author Name"
          value={inputText.author}
          name="author"
          onChange={onChange}
          required
        />
        <button className="add-book-button" type="submit"> Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
