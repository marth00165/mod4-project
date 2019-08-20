import React, {Component} from 'react'
import MyDogCard from "../Components/MyDogCard"
import {Redirect} from "react-router"
import jwtDecode from 'jwt-decode';
const API = `http://localhost:3000/pets`





class Pets extends Component {

state = {
    render: false,
    mydogs: []
}

componentDidMount = () => {
  let jwt = window.localStorage.getItem("jwt");
  let result = jwtDecode(jwt);
  console.log("result", result)
  let user_id = result.id

  fetch(`http://localhost:3000/users/${user_id}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        mydogs: json.dogs
      })
    })
}




  userHome = () => {
    this.setState({
      render: true
    })
  }

  deleteDawg = (dogID) => {


    fetch(`${API}/${dogID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: dogID
      })
    })



    let filterDogs = this.state.mydogs.filter(dog => {
      return  dog.id != dogID
    })

    this.setState({
      mydogs: [...filterDogs]
    })
  }
  render(){
    return (
      <div>{
        this.state.mydogs.map(dog => <MyDogCard refresh = {this.state.deleteDog} deleteDawg = {this.deleteDawg} dog={dog} key={dog.id} />)
      }
      {this.state.render? <Redirect  to = "/userHome" />: null}


      <button onClick = {this.userHome}>All Dogs</button>
      </div>
    )
  }
}

export default Pets
