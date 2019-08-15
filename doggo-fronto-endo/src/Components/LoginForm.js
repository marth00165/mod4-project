import React, {Component} from "react"
import "../App.css";


export default class LoginForm extends Component{

  state = {
    username: "",
    password: "",
    name: "",
    age: undefined
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



  render (){
    return (
      <div>
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
      </div>
     );

  }
}
