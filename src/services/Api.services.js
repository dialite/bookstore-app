const BaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const AppID = 'pO3alvvHmZg8vu7cgd3F';

const BookURL = `${`${BaseURL}/apps/${AppID}/books`}`;

const addBook = async (book) => {
  const response = await fetch(BookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  return response;
};

const removeBook = async (id) => {
  const response = await fetch(`${BookURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return response;
};

const getBooks = async () => {
  const response = await fetch(BookURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const booksData = await response.json();
  return booksData;
};

export default {
  addBook,
  getBooks,
  removeBook,
};
