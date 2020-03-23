import styled from 'styled-components';
import { colorText } from '../../globalStyle/color';

export const Div = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 8%;
  margin-bottom: 50px;
`;

export const FormContainer = styled.div`
  border-radius: 10px;
  margin-bottom: 18%;
  border: solid 3px black;
  padding: 70px;
  width: fit-content;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  padding-bottom: 40px;
`;

export const DivSearch = styled.div`
  display: grid;
  justify-content: center;
  margin-top: -35px;
  background-color: blanchedalmond;
  border-radius: 5px;
  padding: 6px;
  font-weight: 900;
  cursor: pointer;
  width: 113%;
  margin-left: -13px;
`;

export const InputSearch = styled.input`
  margin-left: -12px;
  width: 111%;
  border-radius: 5px;
  margin-top: 3px;
  padding: 5px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: start;
  margin-left: -25%;
  list-style: none;
  color: ${colorText};
  margin-top: 10px;
`;

export const SpanLi = styled.span`
  cursor: pointer;

  ${({ complete }) =>
    complete &&
    `
      padding: 2px;
      text-decoration: line-through;
      color: grey;
      background: red;
      border-radius: 8px;
      padding-left: 14px;
  `}
`;

export const SpanUpdate = styled.span`
  cursor: pointer;
  background: aqua;
  border-radius: 50%;
  margin-left: 3%;
`;

export const SpanDelete = styled.span`
  cursor: pointer;
  background: antiquewhite;
  border-radius: 50%;
  margin-left: auto;
`;

export const InputText = styled.input`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 115%;
  margin-left: -8%;
  text-align: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 9px;
  border-radius: 6px;
  background-color: mistyrose;
  width: 122%;
  color: ${colorText};
  font-weight: bold;
  font-size: 1em;
  margin-left: -7%;

  ${({ disabled }) =>
    disabled &&
    `
    background: grey;
    color: black;
    opacity: 0.5;
  `}
`;
