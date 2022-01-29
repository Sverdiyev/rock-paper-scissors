import React, { useContext } from 'react';
import { ScoreNumber, ScoreSpan, StyledDiv } from './Score.styles';
import GameContext from '../store/game-context';

function Score() {
  const gameCtx = useContext(GameContext);
  return (
    <StyledDiv>
      <ScoreSpan>score</ScoreSpan>
      <ScoreNumber>{gameCtx.score}</ScoreNumber>
    </StyledDiv>
  );
}

export default Score;
