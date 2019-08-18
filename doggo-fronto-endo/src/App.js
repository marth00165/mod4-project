import React, {Component} from 'react';
import logo from './logo.svg';
import DogContainer from './Containers/DogContainer'
import DoginPage from './Containers/DoginPage'

import './App.css';

const breedsAPI = "https://dog.ceo/api/breeds/list/all"
const imageAPI = `https://dog.ceo/api/breed`

class App extends Component {

  constructor(){
    super();
    this.state = {
      dogs: [],
      allDogs: [],
      dogPictures: [],
      filters: {
        breed:""
      }
    }
  }



  dogObjectMaker = (dogs) => {



  let allDogs = dogs.map(dogName => {

  fetch(`${imageAPI}/${dogName}/images/random`)
  .then(res => res.json())
  .then(
    data => {
      this.state.dogPictures.push(data.message)
    })

    let dogIndex = dogs.indexOf(dogName)

  return {
          name: dogName,
          image_url: ""
         }
      })





    console.log(this.state.dogPictures)


  this.setState({
    allDogs: allDogs
  })

   console.log(this.state.allDogs)


}



componentDidMount = () => {


  fetch(breedsAPI)
  .then(res => res.json())
  .then(dogs => {
    return this.setState({
      dogs: [...Object.keys(dogs.message)]
    })}).then(
      () => this.dogObjectMaker(this.state.dogs)
  )


  console.log(this.state.dogPictures)


}








  render () {



    return (
      <div>
        <DogContainer dogs={this.state.allDogs} />
        <DoginPage />

      </div>
    )
  }

}

export default App;
