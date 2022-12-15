import { ADD_NEW_BOOK, REMOVE_BOOK, GET_BOOKS_API } from '../types';
import ApiServices from '../../services/Api.services';

const defualtBooks = [];

export function getBooksAPI(books) {
  const APIBooks = Object.entries(books).map(([key, value]) => ({ ...value[0], id: key }));
  return {
    type: GET_BOOKS_API,
    payload: APIBooks,
  };
}

export const bookFromAPI = () => async (dispatch) => {
  const response = await ApiServices.getBooks();
  dispatch(getBooksAPI(response));
};

export function addNewBook(newBook) {
  return {
    type: ADD_NEW_BOOK,
    payload: newBook,
  };
}

export const addNewBooks = (newBook) => async (dispatch) => {
  await ApiServices.addBook(newBook);
  dispatch(addNewBook({ ...newBook, id: newBook.item_id }));
};

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    payload: bookId,
  };
}

export const removeBooks = (id) => async (dispatch) => {
  await ApiServices.removeBook(id);
  dispatch(removeBook(id));
};

export default function reducerBook(initialState = defualtBooks, action) {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.payload))];
    case GET_BOOKS_API:
      return [...action.payload];
    default:
      return initialState;
  }
}
