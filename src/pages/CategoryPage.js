import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const check = () => dispatch(checkStatus());
  const status = useSelector((state) => state.categories, shallowEqual);
  return (
    <>
      <button type="button" onClick={check}>
        Check status
      </button>
      <div>{status}</div>
    </>
  );
};

export default CategoryPage;
