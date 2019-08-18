import React from "react"
import DogCard from "../Components/DogCard"
const imageAPI = `https://dog.ceo/api/breed`



export default class DogContainer extends React.Component {




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
        {allDogs.map(dog => <DogCard key = {allDogs.indexOf(dog)} dog = {dog} />)}
       </div>
    </div>
     )
   }
}
