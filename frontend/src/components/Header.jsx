/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UseContext, useEffect } from "react";
import { UserContext } from '../context/UserContext';
const baseURL = import.meta.env.VITE_BASE_URL;

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const username = userInfo?.username;
  const logout = () => {
    fetch(`${baseURL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };
  return (
    <header>
      <Link to={"/"} className='logo'>SE NPRU BLOG</Link>
      <nav>
        {username && (
          <>
            <Link to={"/create"}>Create</Link>
            <a onClick={logout}>Logout({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}
export default Header