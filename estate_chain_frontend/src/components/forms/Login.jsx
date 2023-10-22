import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const navigate = useNavigate();

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          accountChangedHandler(result[0]);
        })
        .catch((error) => {
          setErrorMessage(`Error connecting wallet: ${error.message}`);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: 'eth_getBalance', params: [address] })
      .then((balance) => {
        setUserBalance(balance);
        setConnButtonText('Logout');
        navigate('/', { state: address });
      })
      .catch((error) => {
        setErrorMessage(`Error fetching balance: ${error.message}`);
        console.error("Error fetching balance:", error);
      });
  };

  const logoutHandler = () => {
    setDefaultAccount(null);
    setUserBalance(null);
    setConnButtonText('Connect Wallet');
    navigate('/');
  };

  return (
    <>
      <a className="text-sm font-semibold leading-6 text-gray-900">
        <button
          type="button"
          className="text-white bg-blue-400 hover:bg-gray-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
          onClick={defaultAccount ? logoutHandler : connectWalletHandler}
        >
          {connButtonText}
        </button>
      </a>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  );
};

export default Login;
