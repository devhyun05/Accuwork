import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dashboard } from '../layouts/dashboard';


export const LoginForm = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null); 
  const [userBalance, setUserBalance] = useState(null); 
  const [connButtonText, setConnButtonText] = useState('Connect Wallet'); 

    const connectWalletHandler = () => {
      if (window.ethereum) {
          window.ethereum.request({method: 'eth_requestAccounts'})
          .then(result => {
                const data = {
                    address : result[0],
                }
                navigate("/dashboard",{state:data})
          }); 
      } else {
          setErrorMessage("Install MetaMask")
      }
  }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount.address); 
        // getUserBalance(); 
 }

    // const getUserBalance = () => {
    //     window.ethereum.request({method: 'eth_getBalance'})
    //     .then(address => {
    //       setUserBalance(address)
    //     })
    // };


  return (
    <>
    <a onClick={connectWalletHandler} className="text-sm font-semibold leading-6 text-gray-900">
        
             <button type="button" 
                    class="text-white bg-blue-400 hover:bg-gray-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center "
                    onClick={connectWalletHandler}>
                {connButtonText}
            </button>
            <span aria-hidden="true">&rarr;</span>
          </a>
            {/* <div className="accountDisplay">
              <h3>Address: {defaultAccount}</h3>
            </div>
            <div className="balanceDisplay">
              <h3>Balance: {userBalance}</h3>
            </div>
            {errorMessage} */}
            {errorMessage}
    </>
  );
};
