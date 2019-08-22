import React, {Component} from 'react';
import dvdoggo from '../dvdoggo.jpg'

export default class HomePage extends Component {

  handleLogin = () => {
    
    this.props.history.push(`/signin`)
  }

  handleSignUp = () => {
   this.props.history.push("/signup")
  }


render(){
  return (
    <div>
    <header className='homePageHeader'>
      <h1> 🐾 Welcome to Doggo Adopto! 🐾 </h1>
    </header>
    <div>
      <img className="dogImg1" src={dvdoggo} />
    </div>
    <div>
      <button onClick = {this.handleLogin}>Login</button>
      <button onClick = {this.handleSignUp}>SignUp</button>
    </div>
    </div>
  )}
}
