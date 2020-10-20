import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AppContainer, AppHeader } from "./Global.style";

import Users from "./users/Users";
import Home from "./home/Home";

const App = () => {
  return (
    <AppContainer>
      <AppHeader>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/users" component={Users} exact={true}></Route>
          </Switch>
        </BrowserRouter>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
