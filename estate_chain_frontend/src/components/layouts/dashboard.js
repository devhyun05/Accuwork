import React from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBar } from '../searchbar';
import { Card } from '../card';

export const Dashboard = () => {
    const {state} = useLocation()
    const data = state
  return (


    <div>
            Address: {data.address} 
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          logout
        </span>


    <div className="bg-gray-100 items-center justify-center p-10">
    <SearchBar/>
        <h1 className="text-2xl font-semibold mb-4">Properties</h1>
        <div className='grid grid-cols-3'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
</div>
  );
};

