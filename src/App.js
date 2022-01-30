import { useContext } from 'react';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Wrapper from './components/Layout/Wrapper/Wrapper';
import GameContext from './components/store/GameContext';

function App() {
  const gameCtx = useContext(GameContext);
  const { gameState } = gameCtx;

  // const onChangeScore = (type) => {
  //   if (type === 'increase') setScore((prevScore) => prevScore + 1);
  //   if (type === 'decrease') setScore((prevScore) => prevScore - 1);
  // };

  return (
    <Wrapper>
      <Header />
      <Main gameStatus={gameState} />
      <Footer />
    </Wrapper>
  );
}

export default App;
