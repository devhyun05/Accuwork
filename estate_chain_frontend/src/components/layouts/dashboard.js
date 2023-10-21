import React from 'react';
import { useLocation } from 'react-router-dom';

export const Dashboard = () => {
    const {state} = useLocation()
    const data = state
  return (
    <div>
      <h2>Welcome to the Dashboard {data.address}</h2>
    </div>
  );
};

