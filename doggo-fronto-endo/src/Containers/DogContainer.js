import React from "react"
import DogCard from "../Components/DogCard"


export default class DogContainer extends React.Component {


  render (){
    let allDogs = this.props.dogs
    let dogs = Object.keys(allDogs)

    return (
    <div className="mainContainer">
      {dogs.map(dog => <DogCard key = {dogs.indexOf(dog)} dog = {dog} imageAPI={this.props.imageAPI}/>)}
     </div>
     )
   }
}
