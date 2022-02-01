import React from 'react';
import StyledSpan from './GameElementLabel.styles';

function GameElementLabel({ children }) {
  if (!children) return null;
  return <StyledSpan>{children}</StyledSpan>;
}

export default GameElementLabel;
