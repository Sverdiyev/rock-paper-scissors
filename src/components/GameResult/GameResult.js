import React, { useContext } from 'react';
import Reset from '../Reset/Reset.styles';
import GameContext from '../store/GameContext';

function GameResult() {
  const gameCtx = useContext(GameContext);
  const { winner } = gameCtx;

  return (
    <div>
      {/* <Result winner={winner} /> */}
      <Reset />
    </div>
  );
}

export default GameResult;
