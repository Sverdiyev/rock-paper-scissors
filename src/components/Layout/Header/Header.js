import React from 'react';
// import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader.styles';
import Score from '../../Score/Score';
import logo from '../../../assets/images/logo.svg';

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
      <Score />
    </StyledHeader>
  );
}

// Header.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Header;
