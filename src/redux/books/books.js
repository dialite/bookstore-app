import { apiAddBook, apiGetBooks, apiRemoveBook } from '../../modules/api';

const ADD = 'bookstore/Book/ADD';
const GET = 'bookstore/Book/GET';
const REMOVE = 'bookstore/Book/REMOVE';

export const addBook = (payload) => async (dispatch) => {
  const book = { ...payload, item_id: payload.id, category: 'category' };
  await apiAddBook(book);
  dispatch({ type: ADD, book });
};

export const getBooks = () => async (dispatch) => {
  const data = await apiGetBooks();
  const books = Object.keys(data).map((key) => {
    const book = data[key][0];
    book.id = key;
    return book;
  });
  dispatch({ type: GET, books });
};

export const removeBook = (id) => async (dispatch) => {
  await apiRemoveBook(id);
  dispatch({ type: REMOVE, id });
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case GET:
      return action.books;

    case REMOVE:
      return [...state].filter((book) => book.id !== action.id);

    default:
      return state;
  }
}
