import React from "react"
import DogCard from "../Components/DogCard"
const imageAPI = `https://dog.ceo/api/breed`



export default class DogContainer extends React.Component {

  render (){
    let search = "" // what value should go here? think props!
    let allDogs = this.props.dogs // how will you filter this array?
    console.log(allDogs)



    return (
    <div className= "Grid-Column" >
      <div className="Grid-Row">
        {allDogs.map(dog => <DogCard key = {allDogs.indexOf(dog)} dog = {dog} />)}
       </div>
    </div>
     )
   }
}
