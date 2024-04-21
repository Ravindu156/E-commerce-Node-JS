import React from 'react'
import './Navbar.css'
// import { Link } from 'react'

const Navbar = () => {

const handleClick = () => {
    window.alert("Hi")
}


  return (
    <div className='navbar'>
       <div className='nav-logo'>
                <p>CactusCorner</p>
       </div>


      <ul className="nav-menu">
        <li>Home</li>
        <li>Category1</li>
        <li>Category2</li>
        <li>Category2</li>
      </ul>
      <div className="loginbtn">
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  )
}

export default Navbar;