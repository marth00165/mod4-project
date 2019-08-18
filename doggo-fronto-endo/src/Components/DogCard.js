import React from "react"



const DogCard  = props => {

  const {dog} = props;

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


      <img src = "Dog Image Url goes Here"/>
      <h2>{"dog name"}</h2>

      <div>
        <button>Add Dog</button>
      </div>


    </div>

  )



}

export default DogCard
