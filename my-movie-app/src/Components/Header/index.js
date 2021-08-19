import React from "react";
import { HeaderContainer, Item, List } from "./style";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderContainer>
      <List>
        <Item>
          <Link to="/">Movie</Link>
        </Item>
        <Item>
          <Link to="/tv">TV</Link>
        </Item>
        <Item>
          <Link to="/search">Search</Link>
        </Item>
      </List>
    </HeaderContainer>
  );
};

export default Header;
