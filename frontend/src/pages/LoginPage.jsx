/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


export const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const baseURL = import.meta.env.VITE_BASE_URL;


  const login = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then((userInfo)=>{
        setUserInfo(userInfo);
        setRedirect(true);
      });
    }  else {
      alert("Wrong Credentials !")
    }
  };
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <form className='block max-w-md p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow' onSubmit={login}>
      <div>
        <h1 className='text-center font-semibold text-xl'>Login</h1>
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-10 text-gray-900">
            Username
          </label>
          <input type='text' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='username' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password" className="block text-sm font-medium leading-10 text-gray-900">
            Password
          </label>
          <input type='password' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-green-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline"
        >
          Login
        </button>
      </div>


      <div className="mt-6 flex justify-end text-green-700">
        <Link to={"/register"}>Register</Link>
      </div>

    </form>
  )
}
export default LoginPage