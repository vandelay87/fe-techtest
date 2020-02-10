import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MultiplicationTest = ({ limit }) => {
  const [numberList, setNumberList] = useState(
    Array(limit).fill().map((item, index) => (
      {
        key: index + 1,
        value: index + 1,
        highlight: false,
      }
    ))
  );

  const highlightNumbers = (numberVal) => (
    setNumberList(numberList.map((item, index) => (
      {
        key: index + 1,
        value: index + 1,
        highlight: (index + 1) % numberVal === 0 ? true : false
      }
    )))
  );

  return (
    <div>
      {numberList.map((item) => (
        <button onClick={() => highlightNumbers(item.value)} key={item.key} className='item'>{item.value}</button>
      ))}
    </div>
  )
};

MultiplicationTest.propTypes = {
  limit: PropTypes.number,
};

MultiplicationTest.defaultProps = {
  limit: 144,
}

export default MultiplicationTest;
