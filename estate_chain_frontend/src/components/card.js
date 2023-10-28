import React from 'react';

export const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
      <img className="w-full" src="https://via.placeholder.com/300" alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Property 1</div>
        <p className="text-gray-700 text-base">
          This is an example of a card created with Tailwind CSS.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          View
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Buy
        </span>
      </div>
    </div>
  );
};

