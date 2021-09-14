import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: ${(props) => (props.scrollPosition < 50 ? "0" : "-50px")};
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  transition: ${(props) =>
    props.scrollPosition < 50 ? "0.5s ease-in" : "0.5s ease-in-out"};
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  margin: 0 24px;
  font-size: 18px;
  /* border-bottom: 5px solid
    ${(props) => (props.current ? "#BA0F30" : "transparent")}; */
  color: ${(props) => (props.current ? "#BE2121" : "#ffffff")};

  font-weight: bold;

  font-style: ${(props) => (props.current ? "bold" : "normal")};
  transition: 0.5s ease-in-out;

  &:hover {
    font-size: 22px;
  }
`;

export const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
`;
