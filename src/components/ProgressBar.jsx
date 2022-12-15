import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProgressBar.css';

const ProgressBar = (props) => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [leftRotationValue, setLeftRotation] = useState(0);
  const [rightRotationValue, setRightRotation] = useState(0);
  const { limit } = props;

  const updateProgress = () => {
    let innerCount = 0;
    const id = setInterval(() => {
      setCount((count) => count + 1);
      innerCount += 1;
      if (innerCount <= 50) {
        setLeftRotation((leftRotationValue) => leftRotationValue + 3.6);
      } else {
        setRightRotation((rightRotationValue) => rightRotationValue + 3.6);
      }
    }, 20);
    setIntervalId(id);
  };

  if (count === limit) {
    clearInterval(intervalId);
  }

  const leftRotation = {
    transform: `rotate(${leftRotationValue}deg)`,
    transition: 'all 0.2s ease-in',
  };

  const rightRotation = {
    transform: `rotate(${rightRotationValue}deg)`,
    transition: 'all 0.2s ease-in',
  };

  useEffect(updateProgress, []);

  return (
    <div className="chapter-progress">
      <div className="circular">
        <div className="inner" />
        <div className="circle">
          <div className="bar left">
            <div style={leftRotation} className="progress" />
          </div>
          <div className="bar right">
            <div style={rightRotation} className="progress" />
          </div>
        </div>
      </div>
      <div className="status-number">
        <p className="number">
          {limit}
          %
        </p>
        <p className="status"> Completed </p>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  limit: PropTypes.number.isRequired,
};
