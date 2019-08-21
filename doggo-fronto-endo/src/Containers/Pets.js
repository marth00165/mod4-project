import React, {Component} from 'react'
import MyDogCard from "../Components/MyDogCard"

class Pets extends Component {
  render(){
    return (
      <div>{
        this.props.myDogs.map(dog => <MyDogCard dog={dog} key={dog.id} />)
      }
      </div>
    )
  }
}

export default Pets
