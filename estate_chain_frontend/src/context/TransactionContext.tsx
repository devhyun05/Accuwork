import React, { useEffect } from "react";
// import { ethers, Signer, Contract } from "ethers";
// import { contractABI, contractAddress } from "utils/constants";


type EthereumProvider = {
  request: (args: any) => Promise<any>;
  isMetaMask?: boolean;
};

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

type TransactionContextValue = {
  value: null
};

export const TransactionContext = React.createContext<TransactionContextValue | undefined>(undefined);

const { ethereum } = window as unknown as Window & { ethereum: any }; // Replace 'any' with a more specific type if possible

// const getEthereumContract = (): Contract => {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer: Signer = provider.getSigner();
//   const transactionContract: Contract = new ethers.Contract(
//     contractAddress,
//     contractABI,
//     signer
//   );

//   console.log({
//     provider,
//     signer,
//     transactionContract,
//   });

//   return transactionContract;
// };

export const TransactionProvider: React.FC<{children: React.ReactNode}> = (props) => {
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install Metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    console.log(accounts);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={undefined}>
      {props.children}
    </TransactionContext.Provider>
  );
};
