import React, {Component} from 'react';
import jwtDecode from 'jwt-decode';

export default class Home extends Component {
  state = {
    myDogs: []
  }

  componentDidMount = () => {
    let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    let user_id = result.id

    fetch(`http://localhost:3000/users/${user_id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json.dogs[0].name)
        this.setState({
          myDogs: json.dogs
        })
      })

  }

  render(){
    return(
      <h1></h1>

    )
  }

}