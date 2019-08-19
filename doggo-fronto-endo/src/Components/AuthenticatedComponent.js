import React, {Component} from "react" ;

class AuthenticatedComponent extends Component {
  constructor(){
    super()
    this.state = {
      user: undefined
    }
  }

  render (){
    return (
      <div>
      Hello World From Auth
      </div>
    )
  }

}

export default AuthenticatedComponent;
