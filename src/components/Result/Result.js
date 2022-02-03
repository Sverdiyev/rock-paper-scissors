import React, { useContext } from 'react';
import GameContext from '../store/GameContext';
import StyledSpan from './Result.styles';

function Result() {
  const gameCtx = useContext(GameContext);
  const { winner } = gameCtx;

  let message;

  switch (winner) {
    case 'computer':
      message = 'you lost';
      break;
    case 'player':
      message = 'you won';
      break;
    default:
      message = 'draw';
  }

  return <StyledSpan $winner>{message}</StyledSpan>;
}

export default Result;
