import React, { useContext } from 'react';
import Reset from '../Reset/Reset';
import Result from '../Result/Result';
import GameContext from '../store/GameContext';
import GameResultContainer from './GameResult.styles';

function GameResult() {
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

  // TODO: add styled, create Results component
  return (
    <GameResultContainer>
      <Result message={message} />
      <Reset />
    </GameResultContainer>
  );
}

export default GameResult;
