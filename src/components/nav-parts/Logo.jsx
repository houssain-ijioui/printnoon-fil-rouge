import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/main-logo-printnoon.png";



const Logo = () => {
  return (
    <Link to="/home">
        <img className="" src={logo}></img>
    </Link>
  )
}

export default Logo