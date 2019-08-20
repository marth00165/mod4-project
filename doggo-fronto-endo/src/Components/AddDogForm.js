import React, {Component} from 'react';
const API = `http://localhost:3000/pets`


export default class AddDogForm extends Component {

  handleSubmit = (ev) => {

    ev.preventDefault();

    console.log(this.props.location.state.dog)




    let userID = this.props.location.state.userID
    let dog = this.props.location.state.dog
    let dogName = this.inputNode1.value
    let desc = this.inputNode2.value

    fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: dogName,
        breed: dog.name,
        desc: desc,
        image_url:dog.image_url[0],
        user_id:userID
      })
    })
    .then(this.props.history.push("/userHome"))
  }





  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="dogName"> Name Your Dog </label> <br />
        <input type = "text" id ="dogName" name = "dogName" ref = {node => {this.inputNode1 = node}}/> <br />
        <label htmlFor="desc"> Write Something Nice About your new dog! </label> <br />
        <input type = "textarea" id = "desc" name = "desc" ref = {node => {this.inputNode2 = node}} /> <br />
        <button type = "Submit">Add Dog!</button>
      </form>
      </div>

    )
  }
}
