import React from "react"

const DogCard  = props => {

  const {dog, user_name, userID, addDog} = props;

    return(
    <div className='dogCard' >
          <div>
            <h2>{dog.name.toUpperCase()}</h2>
          </div>
          <div>
            <img src= {dog.image_url[0]} />
            <img src= {dog.image_url[1]} />
            <img src= {dog.image_url[2]} />
          </div>
          <div>
            <button onClick = {() => addDog(dog,userID)}>Add Dog</button>
          </div>
    </div>
  )
}

export default DogCard
