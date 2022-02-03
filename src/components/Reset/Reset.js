import React, { useContext } from 'react';
import GameContext from '../store/GameContext';
import StyledReset from './Reset.styles';

function Reset() {
  const gameCtx = useContext(GameContext);

  return (
    <StyledReset type="button" onClick={gameCtx.resetGame}>
      Play Again
    </StyledReset>
  );
}

export default Reset;
