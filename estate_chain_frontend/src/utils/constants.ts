import abi from "./UserRequestToCompany.json";

export const contractABI = abi.abi;
export const contractAddress = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;
