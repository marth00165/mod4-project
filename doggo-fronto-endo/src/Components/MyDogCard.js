import React from "react"

const MyDogCard  = props => {

  const {dog, deleteDawg} = props

    return(
    <div className='dogCard' >
          <div>
            {dog.name}
          </div>
          <div>
            <img src= {dog.image_url} />
          </div>
          <button onClick = {() => deleteDawg(dog.id)}>Remove From List</button>
    </div>
  )
}

export default MyDogCard
