import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* margin: 1.8rem 2.5rem; */
  background-color: white; //FIXME: add gradient later
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 11.4rem;
  border-radius: 0.8rem;
`;
export const ScoreSpan = styled.span`
  font-weight: 600;
  letter-spacing: 0.25rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
`;
export const ScoreNumber = styled.span`
  font-size: 6.4rem;
  color: #565468;
  font-weight: 700;
`;
