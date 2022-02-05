import React, { useContext } from 'react';
import GameContext from '../../store/GameContext';
import StyledReset from './Reset.styles';

function Reset() {
  const gameCtx = useContext(GameContext);
  const { resetGame, winner } = gameCtx;

  return (
    <StyledReset type="button" onClick={resetGame} $winner={winner}>
      Play Again
    </StyledReset>
  );
}

export default Reset;
