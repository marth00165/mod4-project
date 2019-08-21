import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./Components/Home";
import AddDogForm from "./Components/AddDogForm";
import Pets from "./Containers/Pets"
import EditDogForm from "./Components/EditDogForm"
import HomePage from "./Components/HomePage"
import Signin from "./Components/Signin";
import DoginPage from "./Containers/DoginPage";
import Account from "./Containers/Account";
import EditUserForm from './Components/EditUserForm';
import "./App.css";



class App extends Component {



  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/mypets" exact component = {Pets} />
          <Route path = "/addDogForm" exact component = {AddDogForm} />
          <Route path = "/signin" exact component = {Signin} />
          <Route path = "/userHome" exact component = {Home} />
          <Route path = "/signup" exact component = {DoginPage} />
          <Route path = "/editDog" exact component = {EditDogForm} />
          <Route path = "/account" exact component = {Account} />
          <Route path = "/editUser" exact component = {EditUserForm} />
        </Switch>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
