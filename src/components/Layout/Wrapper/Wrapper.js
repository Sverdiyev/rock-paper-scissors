import PropTypes from 'prop-types';
import React from 'react';
import StyledDiv from './Wrapper.styles';

function Wrapper({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
