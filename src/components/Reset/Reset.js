import React, { useContext } from 'react';
import GameContext from '../store/GameContext';

function Reset() {
  const gameCtx = useContext(GameContext);
  return (
    <button type="button" onClick={gameCtx.resetGame}>
      Play Again
    </button>
  );
}

export default Reset;
