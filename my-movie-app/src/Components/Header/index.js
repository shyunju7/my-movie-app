import React from "react";
import { Item, List, SLink } from "./style";

const Header = () => {
  return (
    <Header>
      <List>
        <Item>
          <SLink to="/">Movie</SLink>
        </Item>
        <Item>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
};

export default Header;
