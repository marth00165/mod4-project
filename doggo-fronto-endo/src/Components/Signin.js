import React, {Component} from 'react';

export default class Signin extends Component {

  state = {
    invalid: false
  }

  handleSubmit = (ev) => {

    ev.preventDefault();


    let username = this.inputNode1.value;
    let password = this.inputNode2.value;
    debugger;
    fetch("http://localhost:3000/tokens",
    {method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        username,
        password

      })
    })
    .then(res => res.json())
    .then(data => window.localStorage.setItem("jwt", data.jwt))
    .then(() => this.props.history.push("/userHome"))

    .catch(

    (error) => {
      console.log("Error: ", error.message)
      this.setState({
        invalid: true
      })
    }
  );

  }


    render(){
      return (
        <div>
        {this.state.invalid? <div>Invalid UserName Password combination</div> : null}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username"> Username </label> <br />
            <input type = "text" id ="username" name = "username" ref = {node => {this.inputNode1 = node}}/> <br />
            <label htmlFor="password"> Password </label> <br />
            <input type = "password" id = "password" name = "password" ref = {node => {this.inputNode2 = node}} /> <br />
            <button type = "Submit">Sign In</button>
          </form>
        </div>
    )
  }
}
