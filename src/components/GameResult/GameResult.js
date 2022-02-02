import React, { useContext } from 'react';
import Reset from '../Reset/Reset';
import GameContext from '../store/GameContext';

function GameResult() {
  const gameCtx = useContext(GameContext);
  const { winner } = gameCtx;

  // TODO: add styled, create Results component
  return (
    <div>
      {/* <Result winner={winner} /> */}
      <Reset />
    </div>
  );
}

export default GameResult;
