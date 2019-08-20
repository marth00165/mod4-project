import React, {Component} from 'react'
import MyDogCard from "../Components/MyDogCard"
import {Redirect} from "react-router"
const API = `http://localhost:3000/pets`





class Pets extends Component {

constructor(props){
  super(props)
  this.state = {
    render: false,
    mydogs: this.props.myDogs
  }

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



    let filterDogs = this.props.myDogs.filter(dog => {
      return  dog.id != dogID
    })

    this.setState({
      mydogs: filterDogs
    })
  }
  render(){
    return (
      <div>{
        this.props.myDogs.map(dog => <MyDogCard refresh = {this.state.deleteDog} deleteDawg = {this.deleteDawg} dog={dog} key={dog.id} />)
      }
      {this.state.render? <Redirect  to = "/userHome" />: null}


      <button onClick = {this.userHome}>All Dogs</button>
      </div>
    )
  }
}

export default Pets
