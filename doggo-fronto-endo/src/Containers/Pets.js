import React, { Component } from "react";
import MyDogCard from "../Components/MyDogCard";
import { Redirect } from "react-router";
import jwtDecode from "jwt-decode";
const API = `http://localhost:3000/pets`;

class Pets extends Component {
  state = {
    render: false,
    mydogs: [],
    renderForm: false
  };

  componentDidMount = () => {
    let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);

    let user_id = result.id;

    fetch(`http://localhost:3000/users/${user_id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          mydogs: json.dogs
        });
      });
  };

  userHome = () => {
    this.setState({
      render: true
    });
  };

  deleteDawg = dogID => {
    fetch(`${API}/${dogID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: dogID
      })
    });

    let filterDogs = this.state.mydogs.filter(dog => {
      return dog.id != dogID;
    });

    this.setState({
      mydogs: [...filterDogs]
    });
  };

  editDog = dogID => {
    console.log("dog id", dogID);
    this.setState({
      renderForm: true,
      dogID: dogID
    });
  };

  render() {
    return (
      <div>
        {this.state.mydogs.map(dog => (
          <MyDogCard
            refresh={this.state.deleteDog}
            editDog={this.editDog}
            deleteDawg={this.deleteDawg}
            dog={dog}
            key={dog.id}
          />
        ))}
        {this.state.render ? <Redirect to="/userHome" /> : null}
        {this.state.renderForm ? (
          <Redirect
            to={{
              pathname: "/editdog",
              state: {
                dogID: this.state.dogID
              }
            }}
          />
        ) : null}

        <button onClick={this.userHome}>All Dogs</button>
      </div>
    );
  }
}

export default Pets;
