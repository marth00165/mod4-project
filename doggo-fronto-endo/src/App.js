import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./Components/Home";
import HomePage from "./Components/HomePage"
import Signin from "./Components/Signin";
import DogContainer from "./Containers/DogContainer";
import DoginPage from "./Containers/DoginPage";

import "./App.css";

class App extends Component {

// Write the search functions here

/*
Essentially make a search value in the state update it using a function then pass
the update search value down to the dog container.. Inside the dog container You will
then proceed to filter the allDogs array Based on the search value!


Think About Controller Inputs and how to change them!
*/

//rendering the container and login page/signup page.. might need to add router to load the appropriate content
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path = "/" exact component = {HomePage} />
            <Route path = "/signin" exact component = {Signin} />
            <Route path = "/Home" exact component = {Home} />
            <Route path = "/signup" exact component = {DoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
