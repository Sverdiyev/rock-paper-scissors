import { useReducer } from 'react';
import GameContext from './GameContext';
import { calculateWinner } from './helper-functions';

const ACTIONS = {
  SET_PLAYER_CHOICE: 'setPlayerChoice',
  RESET: 'reset',
  RESULT: 'result',
};

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
  }

  if (action.type === ACTIONS.RESET)
    newState = { ...initialState, score: state.score };

  if (action.type === ACTIONS.RESULT) {
    newState.gameState = 'result';
    [newState.winner, newState.opponentChoice] = calculateWinner(
      state.playerChoice
    );
    if (newState.winner === 'player') newState.score = state.score + 1;
  }
  return {
    ...state,
    ...newState,
  };
};

export function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPlayerChoice = async (choice) => {
    if (state.gameFinished) {
      console.log('game is finished, reset the game');
      return;
    }
    dispatch({ type: ACTIONS.SET_PLAYER_CHOICE, value: choice });
    setTimeout(() => {
      console.log('delayed');
      dispatch({ type: ACTIONS.RESULT });
    }, 1000);
  };
  const resetGame = () => dispatch({ type: ACTIONS.RESET });
  /* eslint-disable */ //FIXME: figure out what to do here
  const contextValue = {
    ...state,
    setPlayerChoice,
    resetGame,
  };

  // useEffect(async () => {
  //   setTimeout(() => dispatch({ type: ACTIONS.RESULT }), 1000);
  // }, [state.gameState === 'waiting' || state.gameState === 'result']);
  // console.log(state.gameState === 'waiting' || state.gameState === 'result');

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export default GameContextProvider;
