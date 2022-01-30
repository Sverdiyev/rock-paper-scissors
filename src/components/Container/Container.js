import React from 'react';
import StyledDiv from './Container.styles';

function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default Container;
