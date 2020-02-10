import React, { useState } from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
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
        <StyledButton onClick={() => highlightNumbers(item.value)} modifiers={item.highlight && 'highlight'} key={item.key} className='item'>
          {item.value}
        </StyledButton>
      ))}
    </div>
  );
};

const MODIFIER_CONFIG = {
  highlight: () => `
    background: red;
  `,
}
const StyledButton = styled.button`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

MultiplicationTest.propTypes = {
  limit: PropTypes.number,
};

MultiplicationTest.defaultProps = {
  limit: 144,
}

export default MultiplicationTest;
