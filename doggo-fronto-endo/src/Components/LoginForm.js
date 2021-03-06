import React, {Component} from "react"
import "../App.css";
import {Redirect} from "react-router"
const API = `http://localhost:3000/users`

export default class LoginForm extends Component{

  state = {
    username: "",
    password: "",
    name: "",
    age: 0,
    redirect: false,
    displayUserNameError: false,
    displayAgeError: false,
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
    }).then(res=> res.json())
    .then(res => res.success ? this.setState({
        redirect: true
      }) : null)
      .then(res=> res.data.username ? this.setState({
        displayUserNameError: true
      }) : res.data.age? this.setState({
        displayAgeError: true
      }) : null ).catch(err=> {
         this.setState({
           redirect: true
         })
    })
  }

  render (){
    return (
      <div className="Login">
      {this.state.redirect? <Redirect  to = "/signin" />: null}
      {this.state.displayUserNameError ? <div> Username not Unique </div> : null}
      {this.state.displayAgeError ? <div> Need to be above 18 </div> : null}
          <header className='homePageHeader'>
            <h1> 🐾 Welcome to Doggo Adopto! 🐾 </h1>
           </header>
          <div>
            <h3>Enter Name </h3>
            <input onChange = {this.handleChange} name = "name" type = "text" placeholder = "enter name" value = {this.state.name}/>
          </div>
          <div>
            <h3>Enter Username</h3> 
            <input onChange = {this.handleChange} name = "username" type = "text" placeholder = "enter username" value = {this.state.username}/>
          </div>
          <div>
            <h3>Enter Age</h3>
            <input onChange = {this.handleChange} name = "age" type = "number" placeholder = "enter age" value = {this.state.age}/>
          </div>
          <div>
            <h3>Enter Password</h3> 
            <input onChange = {this.handleChange} name = "password" type = "password" placeholder = "enter password" value = {this.state.password}/>
          </div>
          <div>
            <h3>Re-enter Password </h3>
            <input onClick = {this.handleCreate} type="button" value ="Create User"/>
          </div>
      </div>
     );
  }
}
