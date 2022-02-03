import Reset from '../Reset/Reset';
import Result from '../Result/Result';
import GameResultContainer from './GameResult.styles';

function GameResult() {
  // TODO: add styled, create Results component
  return (
    <GameResultContainer>
      <Result />
      <Reset />
    </GameResultContainer>
  );
}

export default GameResult;
