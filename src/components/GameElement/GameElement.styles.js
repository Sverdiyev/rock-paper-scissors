import styled from 'styled-components';

const allColors = {
  paper: { primary: '#4664F4', secondary: '#2A45C2' },
  rock: { primary: '#DB2E4D', secondary: '#9D1634' },
  scissors: { primary: '#EB9F0E', secondary: '#C76C1B' },
  shadow: { primary: '#DADADA, #F3f3f3', secondary: '#BABFD4' },
  waiting: {
    primary: 'rgba(0, 0, 0, 0.1)',
  },
};

const getPrimaryColor = (type, gameState, player) => {
  if (gameState === 'waiting' && !player) return 'transparent';
  return allColors[type].primary;
};

const getSecondaryColor = (type, gameState, player) => {
  if (gameState === 'waiting' && !player) return 'transparent';
  return allColors[type].secondary;
};
const getAwaitingColor = () => allColors.waiting.primary;

export const OuterCircle = styled.div`
  ${(p) => console.log(p.gameState)}
  display: flex;
  align-items: flex-start;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type, gameState, player }) =>
    getSecondaryColor(type, gameState, player)};
  width: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 198 : 292)) / 10}rem;
  height: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 203 : 300)) / 10}rem;
  cursor: pointer;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type, gameState, player }) =>
    getPrimaryColor(type, gameState, player)};
  width: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 198 : 292)) / 10}rem;
  height: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 194 : 287)) / 10}rem;
`;

export const ShadowCircle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ gameState, player }) => {
    if (gameState === 'waiting') return getAwaitingColor();
    return getSecondaryColor('shadow', gameState, player);
  }};

  width: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 152 : 225)) / 10}rem;
  height: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 152 : 225)) / 10}rem;
`;

export const InnerCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-image: linear-gradient(
    ${({ gameState, player }) => getPrimaryColor('shadow', gameState, player)}
  );
  width: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 152 : 225)) / 10}rem;
  height: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 152 : 212)) / 10}rem;
`;
export default Circle;
