import React from "react"
import DogCard from "../Components/DogCard"
import {Redirect} from "react-router"
import AddDogForm from "../Components/AddDogForm"
const imageAPI = `https://dog.ceo/api/breed`
const API = `http://localhost:3000/pets`





export default class DogContainer extends React.Component {
 state = {
   renderForm : false,
   dog: undefined,
   userID: undefined
 }

  addDog = (dog, userID) => {

    this.setState({
      renderForm: true,
      dog: dog,
      userID: userID

    })
  }




  render (){


    let search = this.props.search
    let allDogs = this.props.dogs.filter(
      (dog) => {
        return dog.name.indexOf(search) != -1;
      }
    )
    return (


    <div className= "Grid-Column" >
    {this.state.renderForm? <Redirect  to = {
      {pathname: "/addDogForm",
      state: {
            dog: this.state.dog,
            userID: this.state.userID
    }}}/>: null}
        {allDogs.map(dog => <DogCard addDog = {this.addDog} user_name = {this.props.user_name} userID= {this.props.userID} key = {allDogs.indexOf(dog)} dog = {dog} />)}
    </div>
     )
   }
}
