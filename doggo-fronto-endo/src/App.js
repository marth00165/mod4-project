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
      filters: {
        breed:"hound"
      }
    }
  }

  componentDidMount = () => {
    let breed = this.state.filters.breed
    fetch (imageAPI + `/${breed}/images`)
    .then(res => res.json())
    .then(dogImages => console.log(dogImages))

    fetch(breedsAPI)
    .then(res => res.json())
    .then(dogs => {
      this.setState({
        dogs: dogs.message
      })
    })
  }


  render () {

    return (
      <div>
        <DogContainer dogs={this.state.dogs}/>
        <DoginPage />

      </div>
    )
  }

}

export default App;
