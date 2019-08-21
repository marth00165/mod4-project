import React, { Component } from "react";
import { Redirect } from "react-router";
import jwtDecode from "jwt-decode";
const API = "http://localhost:3000/users/";

class Account extends Component {
  state = {
    render: true,
    name: "",
    username: "",
    userID: undefined
  };

  componentDidMount = () => {
    let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    console.log(result);


    fetch(`${API}${result.id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json.name,
          username: json.username
        });
      });
  };

  editUser = () => {
    this.props.history.push("/editUser");
  };

  deleteUser = () => {
    fetch(`${API}${this.state.userID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.userID
      })
    }).then(this.setState({
      render: false
    }))
  }


  render() {
    return (
      <div>
        {this.state.render ? null : <Redirect to="/" />}
        <h1>My Account</h1>
        <h4>Name: </h4>
        <p>{this.state.name}</p>
        <h4>Username: </h4>
        <p>{this.state.username}</p>
        <div>
          <button onClick={this.editUser}>Edit Account Info</button>
          <button onClick={this.deleteUser}>Delete Account</button>
        </div>
      </div>
    );
  }
}

export default Account;
