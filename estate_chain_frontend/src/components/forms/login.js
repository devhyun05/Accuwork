import React, { useState } from 'react';

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [defaultAccount, setDefaultAccount] = useState(''); 
  const [userBalance, setUserBalance] = useState(''); 
  const [connButtonText, setConnButtonText] = useState('Connect Wallet'); 

    const connectWalletHandler = () => {
      if (window.ethereum) {
          window.ethereum.request({method: 'eth_requestAccounts'})
          .then(result => {
              accountChangedHandler(result[0])
          }); 
      } else {
          setErrorMessage("Install MetaMask")
      }
  }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount); 
        getUserBalance(newAccount); 
    }

    const getUserBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance'})
        .then(balance => {
          setUserBalance(balance)
        })
    };


  return (
    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
             <button type="button" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mt-10"
                    onClick={connectWalletHandler}>
                {connButtonText}
            </button>
            <div className="accountDisplay">
              <h3>Address: {defaultAccount}</h3>
            </div>
            <div className="balanceDisplay">
              <h3>Balance: {userBalance}</h3>
            </div>
            {errorMessage}
    </div>
  );
};
