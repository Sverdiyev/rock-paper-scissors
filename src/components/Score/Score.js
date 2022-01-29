import React from 'react';
import { ScoreNumber, ScoreSpan, StyledDiv } from './Score.styles';

function Score() {
  return (
    <StyledDiv>
      <ScoreSpan>score</ScoreSpan>
      <ScoreNumber>12</ScoreNumber>
    </StyledDiv>
  );
}

export default Score;
