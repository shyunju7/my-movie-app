import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 50px;
  &:not(last-child) {
    margin-right: 10px;
  }
`;

export const SLink = styled(Link)``;
