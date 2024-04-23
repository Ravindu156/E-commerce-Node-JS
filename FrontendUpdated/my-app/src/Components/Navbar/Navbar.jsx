import React from 'react';
import { useState } from 'react' ;
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { Link } from 'react'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  useEffect(()=>{
    console.log(menu);
},[menu])

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>ScentSpot</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop");}}><Link style={{ textDecoration: "none" }} to="/">Home</Link>{menu==="shop"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("bloombliss");}}><Link style={{ textDecoration: "none" }} to="/bloombliss">Bloom Bliss</Link>{menu==="bloombliss"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("woodlandwonders");}}><Link style={{ textDecoration: "none" }} to="/woodlandwonders">Woodland Wonders</Link>{menu==="woodlandwonders"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("citruscharms");}}><Link style={{ textDecoration: "none" }} to="/citruscharms">Citrus Charms</Link>{menu==="citruscharms"?<hr />:<></>}</li>
      </ul>
      <div className="loginbtn">
      <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;