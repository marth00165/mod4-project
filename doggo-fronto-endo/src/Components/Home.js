import React, { Component } from "react";
import DogContainer from "../Containers/DogContainer";
import DoginPage from "../Containers/DoginPage";
import jwtDecode from "jwt-decode";
const breedsAPI = "https://dog.ceo/api/breeds/list/all";
const imageAPI = `https://dog.ceo/api/breed`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      allDogs: [],
      dogPictures: [],
      search: "" ,
      user_name: undefined,
      userID:undefined
    };
  }



  logOut = () => {
    this.props.history.push("/");
  };

  updateSearch = ev => {
    let search = ev.target.value;
    this.setState({
      search: search.toLowerCase()
    });
  };

  getDogObject = async dogName => {
    const response = await fetch(`${imageAPI}/${dogName}/images/random/4`);
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
    let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    this.setState({
      user_name: result.name,
      userID: result.id
    })
    console.log(result)

    fetch(breedsAPI)
      .then(res => res.json())
      .then(dogs => {
        return this.setState({
          dogs: [...Object.keys(dogs.message)]
        });
      })
      .then(() => this.dogObjectMaker(this.state.dogs));
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Dog Breed"
            onChange={this.updateSearch}
          />
        </div>
        <div>
          <h1>Hello {this.state.user_name}</h1>
        </div>
        <div>
          <button onClick={this.logOut}>Logout</button>
        </div>
        <br/>
        <br/>
        <DogContainer userID = {this.state.userID} user_name = {this.state.user_name} search = {this.state.search} dogs={this.state.allDogs} />
      </div>
    );
  }
}

export default Home;
