import * as api from '../../api/api';
import '../../styles/book.css';

const ADD_BOOK = 'BookStores/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStores/books/REMOVE_BOOK';
const GET_BOOKS = 'BookStores/books/GET_BOOKS';

const handleData = (data) => {
  const books = [];
  const keys = Object.keys(data);

  keys.forEach((key, index) => {
    const book = data[keys[index]];
    book[0].item_id = key;

    books.push(book[0]);
  });

  return books;
};

// This shows how to implement Action Creators
export const getBooks = () => async (dispatch) => {
  try {
    const data = await api.fetchBooks();

    dispatch({ type: GET_BOOKS, payload: handleData(data) });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    await api.postBook(book);

    dispatch({ type: ADD_BOOK, payload: book });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  try {
    await api.deleteBook(bookId);

    dispatch({ type: REMOVE_BOOK, payload: bookId });
  } catch (error) {
    throw new Error(error.message);
  }
};

// This code shows how Reducers are implemented

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return action.payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};
// export default reducer;
export default reducer;
