import React, {Component} from "react";
import LoginForm from '../Components/LoginForm'
import "../App.css";


export default class DoginPage extends Component {
  render(){
    return(
      <div className="mainContainer">
        <LoginForm handleChange = {this.handleChange} />
      </div>
    )
  }
}
