import React, { useState } from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import PropTypes from 'prop-types';

const MultiplicationNumbers = ({ limit }) => {
  const [numberList, setNumberList] = useState(
    Array(limit).fill().map((item, index) => (
      {
        key: index + 1,
        value: index + 1,
        highlight: false,
        selected: false,
      }
    ))
  );

  const highlightNumbers = numberVal => {
    const resetNumberList = numberList[numberVal - 1].selected;

    return (setNumberList(numberList.map(item => (
      {
        key: item.key,
        value: item.value,
        highlight: resetNumberList ? false : (item.value % numberVal === 0) ? true : false,
        selected: resetNumberList ? false : numberVal === item.value,
      }
    ))));
  };

  return (
    <StyledWrapper>
      {numberList.map(item => (
        <StyledButton onClick={() => highlightNumbers(item.value)} modifiers={item.highlight && 'highlight'} key={item.key}>
          {item.value}
        </StyledButton>
      ))}
    </StyledWrapper>
  );
};

const MODIFIER_CONFIG = {
  highlight: () => `
    background: red;
    color: white;
  `,
}
const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 61.25em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: start;
  box-sizing: border-box;
`;
const StyledButton = styled.button`
  background: transparent;
  flex: 0 1 100%;
  margin: 0 auto 1em;
  padding: 2em;
  border: 1px solid gray;

  @media (min-width: 48em) {
    flex: 0 1 49%;
  }

  @media (min-width: 80em) {
    flex: 0 1 32%;
  }

  &: hover {
    cursor: pointer;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

MultiplicationNumbers.propTypes = {
  limit: PropTypes.number,
};

MultiplicationNumbers.defaultProps = {
  limit: 144,
}

export default MultiplicationNumbers;
