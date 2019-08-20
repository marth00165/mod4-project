import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import logo from "./logo.svg";
import Home from "./Components/Home";
import MyPets from "./Components/MyPets"
import HomePage from "./Components/HomePage"
import Signin from "./Components/Signin";
import DoginPage from "./Containers/DoginPage";

import "./App.css";



class App extends Component {



  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/mypets" exact component = {MyPets} />
          <Route path = "/signin" exact component = {Signin} />
          <Route path = "/userHome" exact component = {Home} />
          <Route path = "/signup" exact component = {DoginPage} />
        </Switch>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
