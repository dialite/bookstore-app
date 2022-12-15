import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Categories);
  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button className="check-status-button" type="button" onClick={handleStatus}>Check status</button>
      <br />
      <div className="check-status">{categories}</div>
    </div>
  );
}

export default Categories;
