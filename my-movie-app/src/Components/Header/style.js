import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 100px;
  &:not(last-child) {
    margin-right: 10px;
  }
  &:hover {
    font-size: 20px;
  }
`;

export const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-contents: center;
`;
