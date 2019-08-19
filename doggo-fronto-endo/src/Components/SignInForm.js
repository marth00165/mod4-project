import React, {Component} from "react"
import "../App.css";
const API = `http://localhost:3000/users`

export default class SignInForm extends Component{

  state = {
    username: "",
    password: ""
  }

  handleChange = ev => {
    if (ev.target.name === "username") {
      this.setState({username: ev.target.value})
    }
    else if (ev.target.name === "password") {
     this.setState({password: ev.target.value})
   }
  }

//   handleFetch =()=> {
//       //this is our fetch
//       fetch(API).then(res => res.json()).then(user => console.log(user))
//   }

  render (){
    return (
      <div className="SignIn">
        <h2>Login!</h2>
          <div>
            <input onChange = {this.handleChange} name = "username" type = "text" placeholder = "enter username" value = {this.state.username}/>
          </div>
          <div>
            <input onChange = {this.handleChange} name = "password" type = "password" placeholder = "enter password" value = {this.state.password}/>
          </div>
          <div>
            <input onClick = {this.handleCreate} type="button" value ="Login"/>
          </div>
      </div>
     );
  }
}