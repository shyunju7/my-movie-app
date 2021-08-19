import React from "react";
import { HeaderContainer, Item, List } from "./style";
import { Link, withRouter } from "react-router-dom";

export default withRouter(({ location: { pathname } }) => (
  <HeaderContainer>
    <List>
      <Item current={pathname === "/"}>
        <Link to="/">Movie</Link>
      </Item>
      <Item current={pathname === "/tv"}>
        <Link to="/tv">TV</Link>
      </Item>
      <Item current={pathname === "/search"}>
        <Link to="/search">Search</Link>
      </Item>
    </List>
  </HeaderContainer>
));
