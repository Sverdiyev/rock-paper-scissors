import { useReducer } from 'react';
import GameContext from './GameContext';
import { calculateWinner } from './helper-functions';

const ACTIONS = {
  SET_PLAYER_CHOICE: 'setPlayerChoice',
  RESET: 'reset',
  RESULT: 'result',
  SHOW_MODAL: 'showModal',
  HIDE_MODAL: 'hideModal',
};

const initialState = {
  winner: null,
  opponentChoice: null,
  playerChoice: null,
  score: 0,
  gameState: 'ready',
  gameFinished: false,
  modalVisible: false,
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

  if (action.type === ACTIONS.HIDE_MODAL) newState.modalVisible = false;
  console.log('🚀 ~ reducer ~ action.type', action.type);

  if (action.type === ACTIONS.SHOW_MODAL) newState.modalVisible = true;

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

  const showModal = () => dispatch({ type: ACTIONS.SHOW_MODAL });
  const hideModal = () => dispatch({ type: ACTIONS.HIDE_MODAL });

  const resetGame = () => dispatch({ type: ACTIONS.RESET });
  /* eslint-disable */ //FIXME: figure out what to do here
  const contextValue = {
    ...state,
    setPlayerChoice,
    resetGame,
    showModal,
    hideModal,
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
