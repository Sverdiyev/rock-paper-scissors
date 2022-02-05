import { createContext } from 'react';

const GameContext = createContext({
  playerChoice: null,
  opponentChoice: null,
  score: 0,
  winner: '',
  gameState: '',
  setPlayerChoice() {},
  modalVisible: false,
});

export default GameContext;
