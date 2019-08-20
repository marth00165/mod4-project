import React from "react"

const MyDogCard  = props => {

  const {dog} = props

    return(
    <div className='dogCard' >
          <div>
            {dog.name}
          </div>
          <div>
            <img src= {dog.image_url} />
          </div>
          <button>Remove From List</button>
    </div>
  )
}

export default MyDogCard
