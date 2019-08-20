import React, {Component} from 'react';
import jwtDecode from 'jwt-decode';


export default class Home extends Component {

  componentDidMount = () => {
    let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    console.log("result", result)
    let user_id = result.id
    console.log(user_id)
  }

  render(){
    return(
      <h1>{this.props.userID}</h1>

    )
  }

}
