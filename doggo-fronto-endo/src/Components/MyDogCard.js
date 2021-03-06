import React from "react";

const MyDogCard  = props => {

  const {dog, deleteDawg, editDog} = props



    return(
    <div>
      <div className='dogCard' >
          <div>
            {dog.name}
          </div>
          <div>
            <img src= {dog.image_url} />
          </div>
          <div>
            <button onClick = {() => deleteDawg(dog.id)}>Remove From List</button>
            <button onClick = {() => editDog(dog.id)}>Edit Dog Info</button>
          </div>
      </div>
    </div>
  )
}

export default MyDogCard
