import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    navigate('/dashboard');
  };

  return (
    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <span className="ml-2 text-sm">Remember Me</span>
        </label>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};
