import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MultiplicationTest = ({ limit }) => (<p>limit: {limit}</p>);

MultiplicationTest.propTypes = {
  limit: PropTypes.number,
};

MultiplicationTest.defaultProps = {
  limit: 144,
}

export default MultiplicationTest;
