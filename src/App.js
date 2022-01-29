import GameElement from './components/GameElement/GameElement';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Wrapper from './components/Layout/Wrapper/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <GameElement type="rock" />
      </Main>
    </Wrapper>
  );
}

export default App;
