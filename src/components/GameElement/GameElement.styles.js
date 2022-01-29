import styled from 'styled-components';

const allColors = {
  paper: { primary: '#4664F4', secondary: '#2A45C2' },
  rock: { primary: '#DB2E4D', secondary: '#9D1634' },
  scissors: { primary: '#EB9F0E', secondary: '#C76C1B' },
  shadow: { primary: '#DADADA, #F3f3f3', secondary: '#BABFD4' },
};

const getPrimaryColor = (type) => allColors[type].primary;
const getSecondaryColor = (type) => allColors[type].secondary;

export const OuterCircle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type }) => getSecondaryColor(type)};
  width: ${(p) => (p.theme.deviceWidth * 198) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 203) / 10}rem;
  cursor: pointer;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ type }) => getPrimaryColor(type)};
  width: ${(p) => (p.theme.deviceWidth * 198) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 194) / 10}rem;
`;

export const ShadowCircle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  border-radius: 50%;
  background-color: ${() => getSecondaryColor('shadow')};
  width: ${(p) => (p.theme.deviceWidth * 152) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 152) / 10}rem;
`;

export const InnerCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-image: linear-gradient(${() => getPrimaryColor('shadow')});
  width: ${(p) => (p.theme.deviceWidth * 152) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 144) / 10}rem;
`;

export default Circle;
