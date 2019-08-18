import React from "react"




const DogCard  = props => {

  const {dog} = props;

  /*

  dog object looks like this

  {

  name : dog name,
  image_url: the image url
}

  */


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
            <button onClick = {() => console.log("Use a callback function or pass it down as props?")}>This Button will add a dog to the owner</button>
            <button onClick = {() => console.log("Use a callback function or pass it down as props?")}>This Button will give more info about the dog</button>
          </div>
    </div>

  )



}

export default DogCard
