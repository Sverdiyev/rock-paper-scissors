import styled from 'styled-components';

const StyledReset = styled.button`
  color: ${(p) => p.theme.colors.dark};
  background-color: white;
  padding: 1.5rem 5.5rem;
  width: 22rem;
  height: 4.8rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.25rem;
  font-weight: 600;
  border: none;
  border-radius: 0.8rem;
`;

export default StyledReset;
