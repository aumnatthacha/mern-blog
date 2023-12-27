// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
// import Editor from '../components/Editor'
// import { PhotoIcon } from '@heroicons/react/24/solid'
// const baseURL = import.meta.env.VITE_BASE_URL;
// import { Navigate } from 'react-router-dom';



// const CreatePage = () => {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [file, setFile] = useState("");
//   const [redirect, setRedirect] = useState(false);

//   const CreatePage = async () => {
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);
//     data.set("file", files[0]);
//     e.preventDefault();
//     const response = await fetch(`${baseURL}/post`, {
//       method: "POST",
//       body: data,
//       credentials: "include",
//     });

//     if (redirect) {
//       return <Navigate to={"/"} />
//     }



//     return (
//       <form>
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium leading-10 text-gray-900">
//             Title
//           </label>
//           <input type='text' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={title} name='title' placeholder='title' onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="summary" className="block text-sm font-medium leading-10 text-gray-900">
//             Summary
//           </label>
//           <input type='text' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={summary} name='summary' placeholder='summary' onChange={(e) => setSummary(e.target.value)} />
//         </div>


//         <div>
//           <label htmlFor="file" className="block text-sm font-medium leading-10 text-gray-900">
//             File
//           </label>
//           <input type='file' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={file} name='file' id='file' onChange={(e) => setFile(e.target.value)} />
//         </div>

//         <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//           <div className="text-center">
//             <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
//             <div className="mt-4 flex text-sm leading-6 text-gray-600">
//               <label
//                 htmlFor="file"
//                 className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//               >
//                 <span>Upload a file</span>
//                 <input id="file" name="file" type="file" className="sr-only" />
//               </label>
//               <p className="pl-1">or drag and drop</p>
//             </div>
//             <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//           </div>
//         </div>

//         <Editor value={content} onChange={setContent} />

//         <div className="mt-6 flex items-center justify-end gap-x-6">
//           <button
//             type="submit"
//             className="rounded-md bg-green-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline"
//           >
//             Create Post
//           </button>
//         </div>
//       </form>
//     )
//   }
// }

// export default CreatePage

import { useState } from "react";
import Editor from "../components/Editor";
const baseURL = import.meta.env.VITE_BASE_URL;
import { Navigate } from "react-router-dom";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createPost = async (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();
    const response = await fetch(`${baseURL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={createPost} className="block text-sm font-medium leading-10 text-gray-900">
      <input
        type="text"
        name="title"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className="block text-sm font-medium leading-10 text-gray-900"
        type="text"
        name="summary"
        value={summary}
        placeholder="summary"
        onChange={(e) => setSummary(e.target.value)}
      />
      <input className="block text-sm font-medium leading-10 text-gray-900"
        type="file"
        name="file"
        id="file"
        onChange={(e) => setFiles(e.target.files)}
      />
      <Editor value={content} onChange={setContent} className="block text-sm font-medium leading-10 text-gray-900" />
      <button className="rounded-md bg-green-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline"> Create Post </button>
    </form>
  );
};

export default CreatePage;