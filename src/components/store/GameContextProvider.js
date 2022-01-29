import { useCallback, useReducer } from 'react';
import GameContext from './game-context';

const ACTIONS = { setPlayerChoice: 'setPlayerChoice' };

const calculateComputerChoice = () => Math.floor(Math.random() * 3 + 1);

const initialState = {
  winner: null,
  playerChoice: null,
  score: 0,
  gameState: 'ready',
  gameFinished: false,
};

const calculateWinner = (choice) => {
  const opponentChoice = calculateComputerChoice();
  if (choice === opponentChoice) return 'draw';

  switch (choice) {
    case 1:
      if (opponentChoice === 2) return 'computer';
      if (opponentChoice === 3) return 'player';
      break;
    case 2:
      if (opponentChoice === 1) return 'player';
      if (opponentChoice === 3) return 'computer';
      break;
    case 3:
      if (opponentChoice === 1) return 'computer';
      if (opponentChoice === 2) return 'player';
      break;
    default:
      return 'draw';
  }
};

const reducer = (state, action) => {
  const newState = {};

  if (action.type === ACTIONS.setPlayerChoice) {
    newState.playerChoice = +action.value;
    newState.winner = calculateWinner(newState.playerChoice);

    if (newState.winner === 'player') newState.score = state.score + 1;
  }

  return {
    ...state,
    ...newState,
  };
};

export function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPlayerChoice = useCallback((choice) => {
    dispatch({ type: ACTIONS.setPlayerChoice, value: choice });
  }, []);

  /* eslint-disable */
  const contextValue = {
    ...state,
    setPlayerChoice,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export default GameContextProvider;
