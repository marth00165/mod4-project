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
    <br></br>
    <br></br>
    <div>
      <img className="dogImg1" src={dvdoggo} />
    </div>
    <div>

      <div>
        <button onClick = {this.handleLogin} class="btn striped-shadow white"><span>Login </span></button>
        <button onClick = {this.handleSignUp} class="btn striped-shadow blue"><span>Sign Up!</span></button>
      </div>
    </div>
    </div>
  )}
}
