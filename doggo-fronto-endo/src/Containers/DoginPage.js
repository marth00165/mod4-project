import React, {Component} from "react";
import LoginForm from '../Components/LoginForm'
import SignInForm from '../Components/SignInForm'
import "../App.css";


export default class DoginPage extends Component {
  render(){
    return(
      <div className="mainContainer">
        {/* this is the sign up page for user */}
        <LoginForm />

          {/* this is the login in form for returning user */}
        <SignInForm />
      </div>
    )
  }
}
