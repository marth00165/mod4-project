import React, { Component } from "react";
import logo from "./logo.svg";
import DogContainer from "./Containers/DogContainer";
import DoginPage from "./Containers/DoginPage"
import "./App.css";

const breedsAPI = "https://dog.ceo/api/breeds/list/all";
const imageAPI = `https://dog.ceo/api/breed`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      allDogs: [],
      dogPictures: [],
      filters: {
        breed: ""
      }
    };
  }

  getDogObject = async dogName => {
    const response = await fetch(`${imageAPI}/${dogName}/images/random`);
    const json = await response.json();
    return {
      name: dogName,
      image_url: json.message
    };
  };

  dogObjectMaker = async dogs => {
    const allDogs = await Promise.all(
      dogs.map(async dogName => await this.getDogObject(dogName))
    );

    this.setState({
      allDogs: allDogs
    });
  };

  componentDidMount = () => {
    fetch(breedsAPI)
      .then(res => res.json())
      .then(dogs => {
        return this.setState({
          dogs: [...Object.keys(dogs.message)]
        });
      })
      .then(() => this.dogObjectMaker(this.state.dogs));
    console.log(this.state.dogPictures);
  };

  render() {
    return (
      <div>
        <DogContainer dogs={this.state.allDogs} />
        <DoginPage />
      </div>
    );
  }
}

export default App;
