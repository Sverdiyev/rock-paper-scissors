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

const getPrimaryColor = (type, isTransparent) => {
  if (isTransparent) return 'transparent';
  return allColors[type].primary;
};

const getSecondaryColor = (type, isTransparent) => {
  if (isTransparent) return 'transparent';
  return allColors[type].secondary;
};
const getAwaitingColor = () => {
  return allColors.waiting.primary;
};

export const OuterCircle = styled.div`
  ${(p) => {
    if (p.showPointer) {
      return 'cursor: pointer;';
    }
  }}

  display: flex;
  align-items: flex-start;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type, isTransparent }) =>
    getSecondaryColor(type, isTransparent)};

  width: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 198 : 292)) / 10}rem;
  height: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 203 : 300)) / 10}rem;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type, isTransparent }) =>
    getPrimaryColor(type, isTransparent)};
  width: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 198 : 292)) / 10}rem;
  height: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 194 : 287)) / 10}rem;
`;

export const ShadowCircle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ isTransparent }) => {
    if (isTransparent) {
      return getAwaitingColor();
    }
    return getSecondaryColor('shadow', isTransparent);
  }};

  width: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 152 : 225)) / 10}rem;
  height: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 152 : 225)) / 10}rem;
`;

export const InnerCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-image: linear-gradient(
    ${({ isTransparent }) => getPrimaryColor('shadow', isTransparent)}
  );

  width: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 152 : 225)) / 10}rem;
  height: ${({ theme, isBig }) =>
    (theme.deviceWidth * (!isBig ? 144 : 212)) / 10}rem;
`;
export default Circle;
