import React from "react"



const DogCard  = props => {

  const {dog} = props;





    return(
    <div className='dogCard' >
      <h2>{dog.name}</h2>
      <h3>{dog.image_url}</h3>



    </div>

  )



}

export default DogCard
