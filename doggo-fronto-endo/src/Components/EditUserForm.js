import React, {Component} from 'react';
import jwtDecode from 'jwt-decode';

const API = `http://localhost:3000/users`


export default class EditUserForm extends Component {

  state = {
    userID: undefined,
    passwordError: false
  }

  componentDidMount = () => {
    let jwt =  window.localStorage.getItem("jwt")
    let result = jwtDecode(jwt);
    console.log(result);

    this.setState({
      userID: result.id
    })
  }

  handleSubmit = (ev) => {

    ev.preventDefault();


    let userID = this.state.userID
    let userName = this.inputNode1.value
    let password1 = this.inputNode2.value
    let password2 = this.inputNode3.value
    if(password1 === password2){
      fetch(`${API}/${userID}`, {
        method: 'PATCH',
        headers: {

          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: userName,
          password: password1
        })
      })
    } else {
      this.setState({
        passwordError: true
      })
    }

    }


  render(){
    return(
      <div>
        {this.state.passwordError ? <div> Passwords don't match </div> : null }
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"> Update Name </label> <br />
        <input type = "text" id ="name" name = "dogName" ref = {node => {this.inputNode1 = node}}/> <br />
        <label htmlFor="password"> New Password </label> <br />
        <input type = "password" id = "desc" name = "desc" ref = {node => {this.inputNode2 = node}} /> <br />
        <label htmlFor="password"> New Password </label> <br />
        <input type = "password" id = "desc" name = "desc" ref = {node => {this.inputNode3 = node}} /> <br />
        <button type = "Submit">Edit Account!</button>
      </form>
      </div>

    )
  }
}
