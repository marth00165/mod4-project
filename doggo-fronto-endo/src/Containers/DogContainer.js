import React from "react"
import DogCard from "../Components/DogCard"


export default class DogContainer extends React.Component {


  render (){
    let allDogs = this.props.dogs
    let dogs = Object.keys(allDogs)

    return (

      <div>
      {dogs.map(dog => <DogCard key = {dogs.indexOf(dog)} dog = {dog}/>)}
     </div>
     )
   }
}
