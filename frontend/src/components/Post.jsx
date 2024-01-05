/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const baseURL = import.meta.env.VITE_BASE_URL;

const Post = ({ _id, cover, title, author, createdAt, summary }) => {
  const formattedDate = format(new Date(createdAt), 'dd MM yyyy HH:MM');

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 post`}>
          <Link to={`/post/${_id}`}>
            <img className="rounded-t-lg" src={`${baseURL}/${cover}`} alt="" />
          </Link>
          <div className="p-5">
            <Link to={`/post/${_id}`} className="block mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              {title}
            </Link>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              {summary}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {author.username}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {formattedDate}
            </p>
            <Link
              to={`/post/${_id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80"
            >
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

