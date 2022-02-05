import ConfettiEl from './components/Confetti/Confetti';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Wrapper from './components/Layout/Wrapper/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
      <ConfettiEl />
      {/* {winner === 'player' && <Confetti {...windowDimensions} run />} */}
    </Wrapper>
  );
}
export default App;
