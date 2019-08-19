import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1> Doggo Adopto </h1>
            <Link to='/'>Login/Logout</Link> | <Link to='/all-dogs'>Home</Link> | <Link to='/my-dogs'> My Dogs</Link> | <Link to='/my-account'>Account Settings</Link> 
        </header>
    )
}
const headerStyle = {
    background: '#128251',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  
  }
export default Header;