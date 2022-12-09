import { shallowEqual, useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const BookPage = () => {
  const bookList = useSelector((state) => state.books, shallowEqual);
  return (
    <div>
      <BookList books={bookList} />
      <AddBook />
    </div>
  );
};

export default BookPage;
