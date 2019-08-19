import React from "react"
import DogCard from "../Components/DogCard"
const imageAPI = `https://dog.ceo/api/breed`
const API = `http://localhost:3000/pets`



export default class DogContainer extends React.Component {


  addDog = (dog, userID) => {
    // debugger;
    fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Test Doggo",
        breed: dog.name,
        desc: "Good Boy",
        image_url:dog.image_url[0],
        user_id:userID
      })
    })
  }




  render (){
    let search = this.props.search
    let allDogs = this.props.dogs.filter(
      (dog) => {
        return  dog.name.indexOf(search) != -1;
      }
    )

    return (
    <div className= "Grid-Column" >
      <div className="Grid-Row">
        {allDogs.map(dog => <DogCard addDog = {this.addDog} user_name = {this.props.user_name} userID= {this.props.userID} key = {allDogs.indexOf(dog)} dog = {dog} />)}
       </div>
    </div>
     )
   }
}
