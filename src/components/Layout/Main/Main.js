import React, { useContext } from 'react';
import GameElement from '../../GameElement/GameElement';
import GameContext from '../../store/game-context';
import StyledMain from './StyledMain.styles';

function Main() {
  const options = { 1: 'paper', 2: 'scissors', 3: 'rock' };
  const gameCtx = useContext(GameContext);
  console.log('🚀 ~ Main ~ gameCtx', gameCtx);
  const { playerChoice, gameState } = gameCtx;
  console.log('🚀 ~ Main ~ playerChoice', playerChoice);
  const ready = (
    <>
      <GameElement type="paper" id="1" big={1} />
      <GameElement type="scissors" id="2" big={1} />
      <GameElement type="rock" id="3" big={1} />
    </>
  );
  const waiting = (
    <GameElement type={options[playerChoice]} id={playerChoice} big={1.48} />
  );
  console.log('🚀 ~ Main ~ waiting', waiting);

  return (
    <StyledMain>
      {gameState === 'ready' && !playerChoice && ready}
      {playerChoice && waiting}
    </StyledMain>
  );
}

export default Main;
