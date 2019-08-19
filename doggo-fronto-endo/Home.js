import React, { Component } from "react";
import DogContainer from "./Containers/DogContainer";
import DoginPage from "./Containers/DoginPage";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route} from 'react-router-dom';
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

  getDogObject = async dogName => {
    const response = await fetch(`${imageAPI}/${dogName}/images/random/2`);
    const json = await response.json();
    return {
      name: dogName,
      image_url: json.message
    };
  };

//this is getting the information for the object
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
        <Router>
          <div>
            <Route path='/dogs' render={props => (
                <React.Fragment>
                  <DogContainer dogs={this.state.allDogs}/>
                </React.Fragment>
            )}/>
            <Route exact path='/' component={DoginPage} />  
          </div>
        </Router>
      )
    }
}

export default App;
