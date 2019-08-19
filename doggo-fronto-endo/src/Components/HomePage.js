import React, {Component} from 'react';


export default class HomePage extends Component {

  handleLogin = () => {
    let signin =  "signin"
    this.props.history.push(`/${signin}`)
  }

  handleSignUp = () => {
   this.props.history.push("/signup")
  }


render(){
  return (
    <div>
    Welcome to Dog Adopter
      <div>
        <button onClick = {this.handleLogin}>Login</button>
        <button onClick = {this.handleSignUp}>SignUp</button>
      </div>
    </div>
  )}
}
