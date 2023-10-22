import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const WorkExperience = () => {
    const {state} = useLocation()
    const data = state
    const navigate = useNavigate()
  return (
    <>


    
    <body className='min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 '>
    <Navbar />
<br></br>
    <div className="w-4/6 mx-auto">
    <div className='gap-5'>
<article className="rounded-xl border bg-white p-4 mx-auto justify-center gap-4">
  <div className="flex items-center gap-4 ">
    <img
      alt="Developer"
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      className="h-16 w-16 rounded-full object-cover"
    />

    <div>
      <div>
      <span >Claire Mac</span>
      <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 ml-80 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
      </div>
      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-500"> Twitter </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-500"> GitHub </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-500">Website</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul className="mt-4 space-y-2">
    <li>
      <a
        href="#"
        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong className="font-medium">Google - Software Developer</strong> - <p className="text-xs font-medium text-gray-400">2008 to 2015</p>

        <p className="mt-1 text-xs font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          consequuntur deleniti, unde ab ut in!
        </p>
      </a>
    </li>    
  </ul>
  
</article>

</div>
</div>
</body>
</>
  );
};

export default WorkExperience;