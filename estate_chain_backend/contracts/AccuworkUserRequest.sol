// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract UserRequestToCompany {
    address public accuworkCompanyWalletAddress; 
    address public companyWalletAddress; 

    struct KYCResult {
        bool isVerified; 
        string verificationDetails; 
    }
    
    struct WorkExperience {
        string employeeName; 
        string companyName;
        string position; 
        string location; 
        uint256 startDate;
        uint256 endDate; 
    }

    mapping(address => KYCResult) public kycResults; 
    mapping(address => mapping(address => WorkExperience)) public workHistory;


    event KYCVerified (
        address indexed userWalletAddress, 
        KYCResult kycResult 
    ); 

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

    function submitKYCResult(bool isVerified, string memory verificationDetails) 
    external 
    onlyAccuworkAdmin 
    {
        kycResults[msg.sender] = KYCResult({
            isVerified: isVerified,
            verificationDetails: verificationDetails
        }); 

        emit KYCVerified(
            msg.sender, 
            KYCResult({
                isVerified: isVerified,
                verificationDetails: verificationDetails
            })
        );
    }

    // function addWorkExperience(
    //     string memory employeeName, 
    //     string memory companyName, 
    //     string memory position,
    //     string memory location, 
    //     uint256 startDate,
    //     uint256 endDate 
    // ) external {
    //     workExperience[msg.sender] = WorkExperience({
    //         employeeName: employeeName, 
    //         companyName: companyName, 
    //         position: position,
    //         location: location, 
    //         startDate: startDate,
    //         endDate: endDate 
    //     });

    //     emit WorkExperienceAdded(
    //         msg.sender, 
    //         WorkExperience({
    //             employeeName: employeeName,
    //             companyName: companyName,
    //             position: position,
    //             location: location,
    //             startDate: startDate,
    //             endDate: endDate
    //         })
    //     );
    // }

    // function getWorkExperience(address userAddress)
    //     external
    //     view 
    //     returns (WorkExperience memory)
    // {
    //     return WorkExperience[userAddress]; 
    // }

    // only accuwork admin can use this function 
    // 1 request = 1 CAD
    // Receive user request and make the payment for creating transaction 
    // Accuwork and the company divide 50:50 
    function payForVerification() external payable onlyAccuworkAdmin userHasEnoughEth(0.0043 ether) {
        uint256 totalAmount = msg.value; 

        // Calculate the amounts for admin and company 
        uint256 ethAmountForAccuwork = totalAmount / 2; 
        uint256 ethAmountForCompany = totalAmount / 2; 

        payable(accuworkCompanyWalletAddress).transfer(ethAmountForAccuwork); 
        payable(companyWalletAddress).transfer(ethAmountForCompany); 

        emit PaymentSplit(accuworkCompanyWalletAddress, companyWalletAddress, ethAmountForAccuwork, ethAmountForCompany);

    }
}