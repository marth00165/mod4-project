import React from "react"

const MyDogCard  = props => {

  const {dog} = props

    return(
    <div className='dogCard' >
          <div>
            {dog.name}
          </div>
          <div>
            <img src= {dog.image_url[0]} />
          </div>
    </div>
  )
}

export default MyDogCard
