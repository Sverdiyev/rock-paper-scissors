import { createContext } from 'react';

const GameContext = createContext({
  playerChoice: null,
  computerChoice: null,
  score: 0,
  currentWinner: '',
  gameState: '',
  setPlayerChoice() {},
});

export default GameContext;
