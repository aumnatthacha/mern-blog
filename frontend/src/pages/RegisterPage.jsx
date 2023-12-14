/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <form className='block max-w-md p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
     <div>
        <h1 className='text-center font-semibold text-xl'>Register</h1>
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-10 text-gray-900">
            Username
          </label>
          <input type='text' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='username' placeholder='username' />
          <label htmlFor="password" className="block text-sm font-medium leading-10 text-gray-900">
            Password
          </label>
          <input type='text' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='password' placeholder='password' />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      </div>

      <div className="mt-6 flex justify-end text-green-700">
        <Link to={"/login"}>Login</Link>
      </div>
  </form>
  )
}

export default RegisterPage