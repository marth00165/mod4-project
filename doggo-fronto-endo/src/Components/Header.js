import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
    return (
        <header style={headerStyle}>
            <h1> 🐾 Doggo Adopto 🐾 </h1>
            <Link to='/userHome'>Home</Link> 
            | <Link to='/mypets'>My Pets</Link>
            | <Link to='/account'>Account Settings</Link>
            | <Link onClick={props.logOut}>Log Out </Link>
        </header>
    )
}
const headerStyle = {
    background: '#586F7C',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  
  }
export default Header;