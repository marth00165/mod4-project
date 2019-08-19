import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import logo from "./logo.svg";
import Home from "./Components/Home";
import HomePage from "./Components/HomePage"
import Signin from "./Components/Signin";
import DoginPage from "./Containers/DoginPage";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      allDogs: [],
      dogPictures: []
    };
  }

// Write the search functions here

/*
Essentially make a search value in the state update it using a function then pass
the update search value down to the dog container.. Inside the dog container You will
then proceed to filter the allDogs array Based on the search value!


Think About Controller Inputs and how to change them!
*/

  getDogObject = async dogName => {
    const response = await fetch(`${imageAPI}/${dogName}/images/random`);
    const json = await response.json();
    return {
      name: dogName,
      image_url: json.message
    };
  };

//rendering the container and login page/signup page.. might need to add router to load the appropriate content
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/signin" exact component = {Signin} />
          <Route path = "/userHome" exact component = {Home} />
          <Route path = "/signup" exact component = {DoginPage} />
        </Switch>
      </BrowserRouter>
        <input type = "text" placeholder = "make this a searchbar" onChange = {console.log("Write an On Change Function!")}/>
        <DogContainer search = "Pass in the Search Value here" dogs={this.state.allDogs} />
        <DoginPage />
      </div>
    );
  }
}

export default App;
