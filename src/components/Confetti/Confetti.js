import { useState, useEffect, useContext } from 'react';
import Confetti from 'react-confetti';
import GameContext from '../../store/GameContext';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function ConfettiEl() {
  const [runConfetti, setRunConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', handleResize);
  }, []);

  const gameCtx = useContext(GameContext);
  const { winner } = gameCtx;
  // const winner = 'asd';
  // let runConfetti = true;

  useEffect(() => {
    if (winner === 'player') setRunConfetti(true);
    const stopConfetti = async () => {
      setTimeout(() => {
        setRunConfetti(false);
      }, 5000);
    };
    stopConfetti();
  }, [winner === 'player']);

  return (
    <Confetti
      {...windowDimensions}
      recycle={false}
      numberOfPieces={runConfetti ? 2000 : 0}
    />
  );
}

export default ConfettiEl;
