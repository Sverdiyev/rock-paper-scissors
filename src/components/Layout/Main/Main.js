import React, { useContext } from 'react';
import GameElement from '../../GameElement/GameElement';
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
        <GameElement
          labelText="Your Choice"
          type={options[playerChoice]}
          gameId={playerChoice}
          gameState={gameCtx.gameState}
          player
        />
      </Container>
      <Container>
        <GameElement
          labelText="Opponent Choice"
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
        <GameElement
          labelText="Your Choice"
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
        <GameElement
          labelText="Opponent Choice"
          type={options[opponentChoice]}
          gameId={opponentChoice}
          gameState={gameCtx.gameState}
        />
      </Container>
    </>
  );

  // {gameState === 'ready' && !playerChoice && ready}
  // {gameState === 'waiting' && waiting}
  // {gameState === 'result' && result}

  const playerOptions = {
    type: !playerChoice ? 'paper' : options[playerChoice],
    gameId: !playerChoice ? 1 : playerChoice,
    gameState: gameCtx.gameState,
    player: !!playerChoice,
  };
  console.log('🚀 ~ Main ~ playerOptions', playerOptions);

  const opponentOptions = {
    type: !opponentChoice ? 'scissors' : options[opponentChoice],
    gameId: !opponentChoice ? 2 : opponentChoice,
    gameState: gameCtx.gameState,
    player: false,
  };
  console.log('🚀 ~ Main ~ opponentOptions', opponentOptions);
  return (
    <StyledMain gameState={gameState}>
      <GameElement {...playerOptions} />
      <GameElement {...opponentOptions} />
      {gameState === 'ready' && (
        <GameElement type="rock" gameId="3" gameState={gameCtx.gameState} />
      )}
    </StyledMain>
  );

  // return (
  //   <StyledMain gameState={gameState}>
  //     {gameState === 'ready' && !playerChoice && ready}
  //     {gameState === 'waiting' && waiting}
  //     {gameState === 'result' && result}
  //   </StyledMain>
  // );
}

export default Main;
