export const calculateComputerChoice = () => Math.floor(Math.random() * 3 + 1);

export const calculateWinner = (choice) => {
  const opponentChoice = calculateComputerChoice();
  if (choice === opponentChoice) return ['draw', opponentChoice];
  switch (choice) {
    case 1:
      if (opponentChoice === 2) return ['computer', opponentChoice];
      if (opponentChoice === 3) return ['player', opponentChoice];
      break;
    case 2:
      if (opponentChoice === 1) return ['player', opponentChoice];
      if (opponentChoice === 3) return ['computer', opponentChoice];
      break;
    case 3:
      if (opponentChoice === 1) return ['computer', opponentChoice];
      if (opponentChoice === 2) return ['player', opponentChoice];
      break;
    default:
      return ['draw', opponentChoice];
  }
};

export const changeStateToResult = async () => {};
