/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const baseURL = import.meta.env.VITE_BASE_URL;

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const username = userInfo?.username;

  const logout = () => {
    fetch(`${baseURL}/logout`, {
      credentials: 'include',
      method: 'POST',
    })
      .then(() => setUserInfo(null))
      .catch((error) => console.error('Logout failed:', error));
  };

  return (
    <header className="bg-green-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-white text-lg font-bold">SE NPRU BLOG</Link>

        <nav>
          {username ? (
            <>
              <Link to="/create" className="text-white mx-2">Create</Link>
              <a onClick={logout} className="text-white mx-2">Logout ({username})</a>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mx-2">Login</Link>
              <Link to="/register" className="text-white mx-2">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
