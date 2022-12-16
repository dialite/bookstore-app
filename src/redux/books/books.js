import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];

export default function books(state = initialState, action) {
  switch (action.type) {
    case 'bookstore/books/FETCH_BOOKS/fulfilled':
      return action.payload.books;
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return [...state, action.payload.book];
    case 'bookstore/books/REMOVE_BOOK/fulfilled':
      return state.filter((book) => book[0] !== action.payload.id);
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(`${API_URL}/books`, {
    item_id: book.id,
    category: book.category,
    title: book.title,
    author: book.author,
  });
  return {
    book: [
      book.id,
      [
        {
          author: book.author,
          title: book.title,
          category: book.category,
        },
      ],
    ],
  };
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${API_URL}/books/${id}`);
  return { id };
});

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const res = await axios.get(`${API_URL}/books`);
  return { books: Object.entries(res.data) };
});
