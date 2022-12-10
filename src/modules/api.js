import { BOOKSTORE_API_KEY, BOOKSTORE_URL } from './environment';

export const apiCreateApp = async () => fetch(`${BOOKSTORE_URL}`, {
  method: 'POST',
  body: '',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.text())
  .catch((error) => {
    throw error;
  });

export const apiAddBook = async (book, idApp = BOOKSTORE_API_KEY) => fetch(`${BOOKSTORE_URL}/${idApp}/books/`, {
  method: 'POST',
  body: JSON.stringify(book),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.text())
  .catch((error) => {
    throw error;
  });

export const apiGetBooks = (idApp = BOOKSTORE_API_KEY) => fetch(`${BOOKSTORE_URL}/${idApp}/books/`)
  .then((response) => {
    const responseLength = Number(response.headers.get('content-length'));
    if (responseLength > 0) {
      return response.json();
    }
    return [];
  })
  .catch((error) => {
    throw error;
  });

export const apiRemoveBook = (idBook, idApp = BOOKSTORE_API_KEY) => fetch(`${BOOKSTORE_URL}/${idApp}/books/${idBook}`, { method: 'DELETE' })
  .then((response) => {
    const responseLength = Number(response.headers.get('content-length'));
    if (responseLength > 0) {
      return response.text();
    }
    return '';
  })
  .catch((error) => {
    throw error;
  });
