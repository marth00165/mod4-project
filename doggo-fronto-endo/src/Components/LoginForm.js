import React, {Component} from "react"
import "../App.css";
const API = `http://localhost:3000/users`

export default class LoginForm extends Component{

  state = {
    username: "",
    password: "",
    name: "",
    age: 0
  }

  handleChange = ev => {
    if (ev.target.name === "name") {
      this.setState({name: ev.target.value})
    } else if (ev.target.name === "username") {
      this.setState({username: ev.target.value})
    } else if (ev.target.name === "age") {
      this.setState({age: ev.target.value})
    }
    else if (ev.target.name === "password") {
     this.setState({password: ev.target.value})
   }

  }

  handleCreate = () =>  {
    console.log('HI THERE BOBBBBB')
    fetch (API, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          name: this.state.name,
          age: this.state.age
        })
    })
  }

  render (){
    return (
      <div className="Login">
        <div>
        <input onChange = {this.handleChange} name = "name" type = "text" placeholder = "enter name" value = {this.state.name}/>
        </div>
        <div>
        <input  onChange = {this.handleChange} name = "username" type = "text" placeholder = "enter username" value = {this.state.username}/>
        </div>
        <div>
        <input  onChange = {this.handleChange} name = "age" type = "number" placeholder = "enter age" value = {this.state.age}/>
        </div>
        <div>
        <input onChange = {this.handleChange} name = "password" type = "password" placeholder = "enter password" value = {this.state.password}/>
        </div>
        <div>
          <input onClick = {this.handleCreate} type="button" value ="Create User"/> 
        </div>
      </div>
     );
  }
}
