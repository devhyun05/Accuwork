import React from 'react';
import { LoginForm } from '../forms/login';
export const Landing = () => {
    return (


        <div className='grid grid-cols-2 p-10 m-10'>

            <div className="bg-gray-100 items-center justify-center p-10">
                <h1 className="text-3xl font-semibold mb-4">Estate Chain</h1>
                <p className="text-gray-600 mb-4">
                Get properties with the power of Blockchain
                </p>
            </div>
        
            <div className="bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
                <LoginForm/>
            </div>
            </div>
        </div>
      );    
};