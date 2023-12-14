/* eslint-disable no-unused-vars */
import React from 'react'
import Editor from '../components/Editor'

const EditPage = () => {
  return (
    
      <form>
        <input type='text' name='title' placeholder='title' />
        <input type='text' name='title' placeholder='summary' />
        <input type='file' name='file' id='file' />
        <Editor/>
        <button>Edit</button>
      </form>
    
  )
}

export default EditPage