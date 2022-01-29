import styled from 'styled-components';

export const OuterCircle = styled.div`
  /* position: relative; */
  display: flex;
  align-items: flex-start;
  justify-content: center;

  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.darkBlue};
  width: ${(p) => (p.theme.deviceWidth * 198) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 203) / 10}rem;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.lightBlue};
  width: ${(p) => (p.theme.deviceWidth * 198) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 194) / 10}rem;
`;

export const ShadowCircle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.grey};
  width: ${(p) => (p.theme.deviceWidth * 152) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 152) / 10}rem;
`;
export const InnerCircle = styled.div`
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom,
    ${(p) => `${p.theme.colors.white}, ${p.theme.colors.grey2}`}
  );
  /* background-color: ${(p) => p.theme.colors.white}; */
  width: ${(p) => (p.theme.deviceWidth * 152) / 10}rem;
  height: ${(p) => (p.theme.deviceWidth * 144) / 10}rem;
`;

export default Circle;
