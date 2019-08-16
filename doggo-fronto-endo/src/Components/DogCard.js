import React from "react"


export default class DogCard extends React.Component {

componentDidMount = () => {
  let imageAPI = this.props.imageAPI
  let dog = this.props.dog
  fetch (imageAPI + `/${dog}/images`)
  .then(res => res.json())
  .then(dogImages => console.log(dogImages))
}

  render(){
    return(
    <div className='dogCard' >
      <h2>{this.props.dog}</h2>
      
    </div>

  )


  }

}
