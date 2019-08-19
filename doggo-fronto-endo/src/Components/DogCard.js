import React from "react"




const DogCard  = props => {

  const {dog} = props;

  const clickHandler = () => {}




    return(
    <div className='dogCard' >
          <div>
            <img src= {dog.image_url[0]} />
            <img src= {dog.image_url[1]} />
            <img src= {dog.image_url[2]} />
          </div>
          <div>
            {dog.name}
          </div>
          <div>
            <button onClick = {() => console.log("Use a callback function or pass it down as props?")}>Add Dog</button>
            <button onClick = {() => console.log("Use a callback function or pass it down as props?")}>More Info</button>
          </div>
    </div>

  )



}

export default DogCard
