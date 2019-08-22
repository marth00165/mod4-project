import React, {Component} from 'react';
import Header from './Header';
import goose from '../goose.jpg'
import rdoggo from '../rdoggo.jpg'
import adoggo from '../adoggo.jpg'


export default class HomePage extends Component {

  
render(){
  return (
    <div>
    <Header />
      <div>
        <h2>Aliya Lewis</h2>
        <img className="dogImg1" src={adoggo} />
        <p>A young upcoming Software Dev with alot of PAWtential</p>
        <p>The seer of all bugs and sugary JavaScript/React.</p>
      </div>
        <br></br>
        <br></br>
      <div>
        <h2>Danielle Martinoli</h2>
        <img className="dogImg2" src={goose}/>
        <p>PAWfectly good programmer and friend</p>
        <p>A Wizard with frontend css that compliments all JavaScript/React elements.</p>
      </div>
        <br></br>
        <br></br>
      <div>
        <h2>Rohit  Pratti</h2>
        <img  className="dogImg3" src={rdoggo} />
        <p>With this Dev, anything is PAWsible</p>
        <p>Master of JavaScript/ React functionality and logic.</p>
      </div>
      <br></br>
      <br></br>
    </div>
  )}
}