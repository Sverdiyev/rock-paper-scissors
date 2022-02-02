import React, { useContext, useEffect, useRef, useState } from 'react';
import GameElement from '../../GameElement/GameElement';
import GameContext from '../../store/GameContext';
import StyledMain from './StyledMain.styles';
import Container from '../../Container/Container';
import GameResult from '../../GameResult/GameResult';

function Main() {
  const [showResult, setShowResult] = useState(false);
  const firstRender = useRef(true);
  const gameCtx = useContext(GameContext);
  const { playerChoice, gameState, opponentChoice } = gameCtx;

  const options = { 1: 'paper', 2: 'scissors', 3: 'rock' };
  const playerOptions = {
    type: !playerChoice ? 'paper' : options[playerChoice],
    gameId: !playerChoice ? 1 : playerChoice,
    gameState,
    player: !!playerChoice,
    labelText: 'Player Choice',
  };

  const opponentOptions = {
    type: !opponentChoice ? 'scissors' : options[opponentChoice],
    gameId: !opponentChoice ? 2 : opponentChoice,
    gameState,
    player: false,
    labelText: 'Opponent Choice',
  };

  const showResultReasons = gameState === 'result';
  let timer;
  useEffect(() => {
    const timeoutShowResults = async () => {
      timer = setTimeout(() => {
        setShowResult(true);
      }, 1000);
    };
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (gameState === 'ready') {
      setShowResult(false);
    }
    if (gameState === 'result') timeoutShowResults();

    return () => clearTimeout(timer);
  }, [showResultReasons]);

  return (
    <StyledMain gameState={gameState}>
      <Container>
        <GameElement {...playerOptions} />
      </Container>
      {showResult && (
        <Container>
          <GameResult />
        </Container>
      )}
      <Container>
        <GameElement {...opponentOptions} />
      </Container>
      {gameState === 'ready' && (
        <GameElement type="rock" gameId="3" gameState={gameCtx.gameState} />
      )}
    </StyledMain>
  );
}

export default Main;
