import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './Header.styles';

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
