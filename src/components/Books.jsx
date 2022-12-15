import { useSelector } from 'react-redux';
import Book from './Book';
import AddBooks from './AddBooks';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book[0]}
          id={book[0]}
          title={book[1][0].title}
          author={book[1][0].author}
          category={book[1][0].category}
        />
      ))}
      <AddBooks />
    </div>
  );
}

export default Books;
