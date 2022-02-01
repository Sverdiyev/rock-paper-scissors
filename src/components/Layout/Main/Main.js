import React, { useContext } from 'react';
import GameElement from '../../GameElement/GameElement';
import GameElementLabel from '../../GameElementLabel/GameElementLabel';
import GameContext from '../../store/GameContext';
import StyledMain from './StyledMain.styles';
import Container from '../../Container/Container';
import GameResult from '../../GameResult/GameResult';

function Main() {
  const options = { 1: 'paper', 2: 'scissors', 3: 'rock' };
  const gameCtx = useContext(GameContext);
  const { playerChoice, gameState, opponentChoice } = gameCtx;
  const ready = (
    <>
      <GameElement type="paper" gameId="1" gameState={gameCtx.gameState} />
      <GameElement type="scissors" gameId="2" gameState={gameCtx.gameState} />
      <GameElement type="rock" gameId="3" gameState={gameCtx.gameState} />
    </>
  );
  const waiting = (
    <>
      <Container>
        <GameElementLabel>Your Choice</GameElementLabel>
        <GameElement
          type={options[playerChoice]}
          gameId={playerChoice}
          gameState={gameCtx.gameState}
          player
        />
      </Container>
      <Container>
        <GameElementLabel>Opponent Choice</GameElementLabel>
        <GameElement
          type="waiting"
          gameId={opponentChoice}
          gameState={gameCtx.gameState}
        />
      </Container>
    </>
  );

  const result = (
    <>
      <Container>
        <GameElementLabel>Your Choice</GameElementLabel>
        <GameElement
          type={options[playerChoice]}
          gameId={playerChoice}
          gameState={gameCtx.gameState}
          player
        />
      </Container>
      {/* <Container>
        <GameResult />
      </Container> */}
      <Container>
        <GameElementLabel>Opponent Choice</GameElementLabel>
        <GameElement
          type={options[opponentChoice]}
          gameId={opponentChoice}
          gameState={gameCtx.gameState}
        />
      </Container>
    </>
  );

  return (
    <StyledMain gameState={gameState}>
      {gameState === 'ready' && !playerChoice && ready}
      {gameState === 'waiting' && waiting}
      {gameState === 'result' && result}
    </StyledMain>
  );
}

export default Main;
