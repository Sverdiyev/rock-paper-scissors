import PropTypes from 'prop-types';
import React from 'react';
import StyledMain from './Main.styles';

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Main;
