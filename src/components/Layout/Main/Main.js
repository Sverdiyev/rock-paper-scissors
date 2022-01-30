import React, { useContext } from 'react';
import GameElement from '../../GameElement/GameElement';
import GameElementLabel from '../../GameElementLabel/GameElementLabel';
import GameContext from '../../store/GameContext';
import StyledMain from './StyledMain.styles';
import Container from '../../Container/Container';

function Main() {
  const options = { 1: 'paper', 2: 'scissors', 3: 'rock' };
  const gameCtx = useContext(GameContext);
  console.log('🚀 ~ Main ~ gameCtx', gameCtx);
  const { playerChoice, gameState, opponentChoice } = gameCtx;
  const ready = (
    <>
      <GameElement type="paper" gameId="1" big={1} />
      <GameElement type="scissors" gameId="2" big={1} />
      <GameElement type="rock" gameId="3" big={1} />
    </>
  );
  const waiting = (
    <>
      <Container>
        <GameElementLabel>Your Choice</GameElementLabel>
        <GameElement type={options[playerChoice]} id={playerChoice} player />
      </Container>
      <Container>
        <GameElementLabel>Opponent Choice</GameElementLabel>
        <GameElement type={options[opponentChoice]} id={opponentChoice} />
      </Container>
    </>
  );

  return (
    <StyledMain gameState={gameState}>
      {gameState === 'ready' && !playerChoice && ready}
      {gameState === 'waiting' && waiting}
    </StyledMain>
  );
}

export default Main;
