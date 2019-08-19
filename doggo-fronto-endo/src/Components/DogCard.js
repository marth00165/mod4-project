import React from "react"



const DogCard  = props => {

  const {dog} = props;

    return(
    <div className='dogCard' >
      <h2>{String(dog.name).toUpperCase()}</h2>
        <img className='dogePics' src={dog.image_url[0]}/>
        <img className='dogePics' src={dog.image_url[1]}/>
        <div>
          <button>More Info!</button>
        </div>
    </div>
  )
}

export default DogCard
