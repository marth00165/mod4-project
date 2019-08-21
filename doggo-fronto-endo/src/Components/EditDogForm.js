import React, {Component} from 'react';
const API = `http://localhost:3000/pets`


export default class EditDogForm extends Component {

  handleSubmit = (ev) => {

    ev.preventDefault();

    console.log(this.props.location.state.dog)





    let dogID = this.props.location.state.dogID
    let dogName = this.inputNode1.value
    let desc = this.inputNode2.value

    fetch(`${API}/${dogID}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: dogName,
        desc: desc
      })
    })
    .then(this.props.history.push("/userHome"))
  }





  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="dogName"> New Dog Name </label> <br />
        <input type = "text" id ="dogName" name = "dogName" ref = {node => {this.inputNode1 = node}}/> <br />
        <label htmlFor="desc"> New Description </label> <br />
        <input type = "textarea" id = "desc" name = "desc" ref = {node => {this.inputNode2 = node}} /> <br />
        <button type = "Submit">Edit Dog!</button>
      </form>
      </div>

    )
  }
}
