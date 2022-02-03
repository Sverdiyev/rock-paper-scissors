import Reset from '../Reset/Reset';
import Result from '../Result/Result';
import GameResultContainer from './GameResult.styles';

function GameResult() {
  return (
    <GameResultContainer>
      <Result />
      <Reset />
    </GameResultContainer>
  );
}

export default GameResult;
