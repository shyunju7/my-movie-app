import React, { useEffect, useState } from "react";
import { HeaderContainer, Item, List } from "./style";
import { Link, withRouter } from "react-router-dom";

export default withRouter(({ location: { pathname } }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  });
  return (
    <HeaderContainer scrollPosition={scrollPosition}>
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
  );
});
