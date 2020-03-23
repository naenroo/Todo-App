import styled from 'styled-components';

export const HeaderWrapper = styled.ul`
  display: flex;
  justify-content: start;
`;

export const MenuList = styled.li`
  margin-right: 3em;
  list-style: none;
`;

export const ListWrapper = styled.div`
  background-color: aliceblue;
  padding: 8px;
  border-radius: 3px;
  border: 2px solid rebeccapurple;

  &:hover {
    background-color: antiquewhite;
    border: 2px solid aliceblue;
  }
`;
