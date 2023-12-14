/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { UseContext, useEffect } from "react";
import { UserContext } from '../context/UserContext';

const Header = () => {
  return (
   <header>
    <Link to={"/"} className='logo'>SE NPRU BLOG</Link>
    <nav>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/create"}>Create</Link>
    </nav>
   </header>
  )
}

export default Header