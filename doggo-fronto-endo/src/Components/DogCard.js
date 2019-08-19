import React from "react"

const DogCard  = props => {
  const dogAPI = 'http://localhost3000/pets'
  const {dog, user_name, userID, addDog} = props;

  const handleClick = (props) => {
    console.log(dog.name)
  }

    return(
    <div className='dogCard' >
      <div>
        <h2>{String(dog.name).toUpperCase()}</h2>
      </div>
      <div>
        <img src={dog.image_url[0]} />
        <img src={dog.image_url[1]} />
        <img src={dog.image_url[2]} />
      </div>
      <div>
        <button onClick = {() => addDog(dog,userID)}>Add Dog</button>
        <button onClick={props.handleClick}>More Info</button>
      </div>
    </div>
  )
}

export default DogCard
