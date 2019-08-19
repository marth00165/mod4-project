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
      dogPictures: []
    };
  }

// Write the search functions here

/*
Essentially make a search value in the state update it using a function then pass
the update search value down to the dog container.. Inside the dog container You will
then proceed to filter the allDogs array Based on the search value!


Think About Controller Inputs and how to change them!
*/

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

  //creating the initial array and fetches for other functions

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

//rendering the container and login page/signup page.. might need to add router to load the appropriate content
  render() {
    return (
      <div>
        <input type = "text" placeholder = "make this a searchbar" onChange = {console.log("Write an On Change Function!")}/>
        <DogContainer search = "Pass in the Search Value here" dogs={this.state.allDogs} />
        <DoginPage />
      </div>
    );
  }
}

export default App;
