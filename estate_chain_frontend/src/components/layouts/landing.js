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
            <div class="text-center">
              <p class="text-2xl font-normal text-gray-900">Verify your company</p>
            </div>
            <input type="url" id="website" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required/>

            <input type="url" id="website" className="bg-gray-50  border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Name" required/>
            
            <input type="url" id="website" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Position" required/>
            
            <input type="url" id="website" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required/>
        </div>
        <div>
          <div class="mt-5 text-right">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
        </div>
      </div>
     </div>
 </div>
 </body>
 
  )
}
