import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const accountNumber = localStorage.getItem("accuWork_account");

  useEffect(() => {
    if (accountNumber) {
      navigate(`/${accountNumber}`);
    }
  }, [accountNumber]);

  const logout = () => {
    localStorage.removeItem("accuWork_account");
    navigate("/");
  };

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          localStorage.setItem("accuWork_account", result[0]);
          navigate(`${result[0]}`);
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(`Error connecting wallet: ${error.message}`);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountImageSrc = accountNumber
    ? generateAvatarURL(accountNumber)
    : ``;

  const accountNumberShorten = accountNumber
    ? `${accountNumber.slice(0, 3)}...${accountNumber.slice(-4)}`
    : "";

  return (
    <>
      <div>{accountNumberShorten}</div>
      {accountNumber ? (
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={accountImageSrc}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <a className="text-sm font-semibold leading-6 text-gray-900">
          <button
            type="button"
            className="text-white bg-blue-400 hover:bg-gray-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
            onClick={connectWalletHandler}
          >
            Connect Wallet
          </button>
        </a>
      )}
      {accountNumber ? (
        <a className="text-sm font-semibold leading-6 text-gray-900">
          <button
            type="button"
            className="text-white bg-blue-400 hover:bg-gray-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
            onClick={logout}
          >
            Logout
          </button>
        </a>
      ) : null}

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  );
};

export default Login;
