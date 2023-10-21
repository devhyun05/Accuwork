import { Fragment, useState } from 'react'
import {LoginForm} from '../forms/login'
import { Navbar } from './navbar'


export const Landing = () => {
  

  return (
    
    <body className='min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400'>
    <Navbar />
     <div className='grid grid-cols-2 p-10 m-10'>

     <div className="bg-gray-100 items-center justify-center p-10">
         <h1 className="text-3xl font-semibold mb-4">Accuwork</h1>
         <p className="text-gray-600 mb-4">
         Get the proof of work experience
         </p>
     </div>
 
     <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>

      </div>
     </div>
 </div>
 </body>
 
  )
}
