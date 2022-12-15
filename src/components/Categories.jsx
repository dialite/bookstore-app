import { useSelector, useDispatch } from 'react-redux';
import { checkStatusBook } from '../redux/categories/categories';
import '../styles/Categories.css';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusChecker = () => {
    dispatch(checkStatusBook());
  };
  return (
    <div className="check">
      <button onClick={statusChecker} type="button">
        Check status
      </button>
      <h4>{status}</h4>
    </div>
  );
}

export default Categories;
