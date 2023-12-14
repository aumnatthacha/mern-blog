/* eslint-disable no-unused-vars */
import React from 'react'
import Editor from '../components/Editor'
import { PhotoIcon } from '@heroicons/react/24/solid'


const CreatePage = () => {
  return (
    <form>
      <div>
        <label htmlFor="title" className="block text-sm font-medium leading-10 text-gray-900">
          Title
        </label>
        <input type='text' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='title' placeholder='title' />
      </div>
      <div>
        <label htmlFor="summary" className="block text-sm font-medium leading-10 text-gray-900">
          Summary
        </label>
        <input type='text' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='title' placeholder='summary' />
      </div>


      <div>
        <label htmlFor="file" className="block text-sm font-medium leading-10 text-gray-900">
          File
        </label>
        <input type='file' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='file' id='file' />
      </div>

      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input id="file" name="file" type="file" className="sr-only" />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>

      <Editor />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-amber-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Create Post
        </button>
      </div>
    </form>
  )
}

export default CreatePage