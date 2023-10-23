// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract UserRequestToCompany {
    address public accuworkCompanyWalletAddress; 
    address public companyWalletAddress; 

    struct WorkExperience {
        string employeeName; 
        string companyName;
        string position; 
        string location; 
        uint256 startDate;
        uint256 endDate; 
    }

    mapping(address => mapping(address => WorkExperience)) public workHistory;

    event WorkHistoryVerified(
        address indexed userWalletAddress,
        address indexed companyWalletAddress, 
        WorkExperience workExperience 
    ); 
    
    // function for Receiving payment from the user 
    event PaymentSplit(address indexed accuworkCompanyWallet, 
                       address indexed companyWallet, 
                       uint256 accuworkEthReceiveAmount,
                       uint256 companyEthReceiveAmount); 

    // When we deploy the smart contract, set accuworkCompanyWalletAddress as our metamask wallet address
    constructor() {
        accuworkCompanyWalletAddress = msg.sender; 
    }

    modifier onlyAccuworkAdmin() {
        require(msg.sender == accuworkCompanyWalletAddress, "Not authorized");
        _; 
    }

    // check user wallet has enough eth to request
    modifier userHasEnoughEth(uint256 amount) {
        require(msg.value >= amount, "Insufficient funds"); 
        _;
    }

    // only accuwork admin can use this function 
    // 1 request = 1 CAD
    // Receive user request and make the payment for creating transaction 
    // Accuwork and the company divide 50:50 
    function payForVerification() external payable onlyAccuworkAdmin userHasEnoughEth(0.0043 ether) {
        uint256 totalAmount = msg.value; 

        // Calculate the amounts for admin and company 
        uint256 ethAmountForAccuwork = totalAmount / 2; 
        uint256 ethAmountForCompany = totalAmount / 2; 

        payable(accuworkCompanyWalletAddress).transfer(totalAmount); 
        payable(companyWalletAddress).transfer(totalAmount); 

        emit PaymentSplit(accuworkCompanyWalletAddress, companyWalletAddress, ethAmountForAccuwork, ethAmountForCompany);

    }
}