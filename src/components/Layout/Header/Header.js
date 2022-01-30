import React from 'react';
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

export default Header;
