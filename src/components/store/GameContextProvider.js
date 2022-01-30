import { useReducer } from 'react';
import GameContext from './GameContext';
import { calculateWinner } from './helper-functions';

const ACTIONS = { SET_PLAYER_CHOICE: 'setPlayerChoice', RESET: 'reset' };

const initialState = {
  winner: null,
  opponentChoice: null,
  playerChoice: null,
  score: 0,
  gameState: 'ready',
  gameFinished: false,
};

const reducer = (state, action) => {
  let newState = {};

  if (action.type === ACTIONS.SET_PLAYER_CHOICE) {
    newState.gameFinished = true;
    newState.gameState = 'waiting';
    newState.playerChoice = +action.value;
    [newState.winner, newState.opponentChoice] = calculateWinner(
      newState.playerChoice
    );

    if (newState.winner === 'player') newState.score = state.score + 1;
  }

  if (action.type === ACTIONS.RESET)
    newState = { ...initialState, score: state.score };

  return {
    ...state,
    ...newState,
  };
};

export function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPlayerChoice = (choice) => {
    if (state.gameFinished) {
      console.log('game is finished, reset the game');
      return;
    }
    dispatch({ type: ACTIONS.SET_PLAYER_CHOICE, value: choice });
  };
  const resetGame = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  /* eslint-disable */ //FIXME: figure out what to do here
  const contextValue = {
    ...state,
    setPlayerChoice,
    resetGame,
  };

  console.log('🚀 ~ GameContextProvider ~ state', state);
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export default GameContextProvider;
