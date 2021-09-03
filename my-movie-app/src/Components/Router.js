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
import Detail from "./Routes/Detail";
import Review from "./Routes/Review";

const RouterComponent = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Route
        path="/movie/:id"
        exact
        render={(props) => <Detail key={props.match.params.id} {...props} />}
      />
      <Route
        path="/show/:id"
        exact
        render={(props) => <Detail key={props.match.params.id} {...props} />}
      />
      <Route path="/movie/:id/reviews" component={Review} />
      <Route path="/show/:id/reviews" component={Review} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default RouterComponent;
