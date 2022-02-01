import styled from 'styled-components';

const allColors = {
  paper: { primary: '#4664F4', secondary: '#2A45C2' },
  rock: { primary: '#DB2E4D', secondary: '#9D1634' },
  scissors: { primary: '#EB9F0E', secondary: '#C76C1B' },
  shadow: { primary: '#DADADA, #F3f3f3', secondary: '#BABFD4' },
  waiting: {
    primary: 'rgba(0, 0, 0, 0.1)',
    secondary: 'transparent',
  },
};

// FIXME: need to find a way to properly show colors

const getPrimaryColor = (type, player) => {
  if (type === 'waiting' && !player) return 'transparent';
  return allColors[type].primary;
};

const getSecondaryColor = (type, player) => {
  if (type === 'waiting' && !player) return 'transparent';
  return allColors[type].secondary;
};
const getAwaitingColor = () => {
  return allColors.waiting.primary;
};

export const OuterCircle = styled.div`
  ${(p) => {
    if (p.gameState === 'result') {
      return '';
    }
  }}
  transform: translateX(200px);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type, player }) => getSecondaryColor(type, player)};
  width: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 198 : 292)) / 10}rem;
  height: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 203 : 300)) / 10}rem;
  cursor: pointer;
  @media all and (max-width=700px) {
    width: ${(p) =>
      (p.theme.deviceWidth * (p.gameState === 'ready' ? 198 : 292)) / 10}rem;
    height: ${(p) =>
      (p.theme.deviceWidth * (p.gameState === 'ready' ? 203 : 300)) / 10}rem;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type, player }) => getPrimaryColor(type, player)};
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
  background-color: ${({ type, player }) => {
    if (type === 'waiting') {
      return getAwaitingColor();
    }
    return getSecondaryColor('shadow', player);
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
    ${({ gameState, player }) => {
      return getPrimaryColor(
        gameState === 'waiting' ? gameState : 'shadow',
        player
      );
    }}
  );

  width: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 152 : 225)) / 10}rem;
  height: ${(p) =>
    (p.theme.deviceWidth * (p.gameState === 'ready' ? 144 : 212)) / 10}rem;
`;
export default Circle;
