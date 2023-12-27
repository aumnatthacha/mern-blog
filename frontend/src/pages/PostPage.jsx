/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const baseURL = import.meta.env.VITE_BASE_URL;



const PostPage = () => {
  const [postInfo, setPostsInfo] = useState(null);
  const [useInfo, setUserInfo] = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${baseURL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostsInfo(postInfo);
      });
    });
  }, [id]);
  if (!postInfo) return "";

  return (
    <div className='post-page'>
      <h1>
      </h1>
      <time>
       
      </time>
      <div className='author'>
     
      </div>
      <div className='image'>
        <img
          src='https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2023/02/financial-broker-explaning-business-data-his-client.jpg'
          alt=''
        />
      </div>
      <div >
        <p className='summary'>
          
        </p>
      </div>
    </div>
  )
}

export default PostPage