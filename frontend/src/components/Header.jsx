/* eslint-disable react/no-unknown-property */
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
    <>
      <nav class="bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="" class="h-8" alt="" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-yellow-50">SE NPRU BLOG</span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            {username ? (
              <>
                <a href="/create" class="text-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create
                </a>
                <button type="button" onClick={logout} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout({username})
                </button>
              </>
              /* <>
                <a href="/create" className="text-sm text-gray-500 dark:text-white hover:underline">Create</a>
               
              </> */
            ) : (
              <>
                <a href="/login" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign in
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
