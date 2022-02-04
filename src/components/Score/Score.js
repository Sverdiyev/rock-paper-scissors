import React, { useContext } from 'react';
import GameContext from '../../store/GameContext';
import { ScoreNumber, ScoreSpan, StyledDiv } from './Score.styles';

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
