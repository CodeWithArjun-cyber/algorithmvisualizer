import styled from "styled-components";

export const Button = styled.p`
  color: #c6cfb8;
  cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  width: 100%;
  background-color: #751199;
  padding-left: 25px;
  padding-right: 25px;
`;

export const SortWrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`;

export const RangeWrapper = styled.div`
  width: 200px;
  align-content: center;
  justify-content: space-evenly;
`;
