import styled from 'styled-components';

export const H1 = styled.h1`
  color: aliceblue;
  text-align: center;
  padding-top: 2%;
`;

export const DivParent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
  grid-gap: 70px;
  padding: 3px 0 20% 0;
`;
