import React, { useState } from 'react';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here, e.g., display search results.
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="w-full max-w-md p-4">
      <div className="relative text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button
          onClick={handleSearch}
          className="absolute right-0 top-0 mt-3 mr-4"
        >
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
          >
            <path d="M56.262 54.935l-14.166-14.166a22.821 22.821 0 002.813-9.583C45.909 16.942 36.967 8 26.984 8 16.999 8 8.058 16.942 8.058 26.985s8.941 18.984 18.926 18.984c4.062 0 7.834-1.324 10.895-3.748l14.229 14.229c.243.243.561.365.88.365a1.25 1.25 0 00.884-1.513 1.25 1.25 0 00-1.512-.884zM8.058 24.985c-6.92 0-12.529-5.609-12.529-12.529 0-6.92 5.609-12.528 12.529-12.528 6.92 0 12.529 5.608 12.529 12.528 0 6.92-5.609 12.529-12.529 12.529z" />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

