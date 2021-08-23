import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import TV from "./Routes/TV";
import Header from "Components/Header";

const RouterComponent = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Route
        path="/tv/popular"
        exact
        render={() => {
          <h2>popular TV show!</h2>;
        }}
      />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default RouterComponent;
