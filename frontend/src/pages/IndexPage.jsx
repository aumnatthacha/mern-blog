/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Post from '../components/Post'
import { useState } from 'react'
const baseURL = import.meta.env.VITE_BASE_URL;


const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {
        posts.length > 0 &&
        posts.map((post) => {
          return < Post key={post._id} {...post} />;
        })}        
    </>

  )
}

export default IndexPage