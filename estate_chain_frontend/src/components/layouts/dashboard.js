import { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { SearchBar } from '../searchbar';
import { Card } from '../card';

export const Dashboard = () => {
    const {state} = useLocation()
    const data = state
    const [address, setAddress] = useState(''); 
    const navigate = useNavigate()

    useEffect(()=>{
        setAddress(data); 
    }, [])
    const handlelogout = () => {
        navigate("/")
    }
  return (


    <div>

            Address: {address} 
            <button type="button" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mt-10"
                    onClick={handlelogout}>
                Logout
            </button>


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

