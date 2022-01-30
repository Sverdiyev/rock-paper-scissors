import React, { useContext } from 'react';
import GameContext from '../store/GameContext';

function GameResult() {
  const gameCtx = useContext(GameContext);
  const { winner } = gameCtx;

  return (
    <div>
      <Result winner={winner} />
      <TryAgain />
    </div>
  );
}

export default GameResult;
