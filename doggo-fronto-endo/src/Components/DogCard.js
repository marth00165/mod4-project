import React from "react"




const DogCard  = props => {

  const {dog} = props;


  const clickHandler = () => {}

  /*
     The Dog Object is set up like so

     dog = {

     name: dog name,
     image_url: "https://Dogimageurl.com/"
   }


   so like if you want the dog name for example you would just say {dog.name}



  */

// create the dog cards here make some buttons that will show the info and another button to add the dog
// don't worry about the click functionality yet just have buttons appear for now
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

      <img src = "Dog Image Url goes Here"/>
      <h2>{"dog name"}</h2>

      <div>
        <button>Add Dog</button>
      </div>
    </div>
  )
}

export default DogCard
