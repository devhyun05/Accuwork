// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract UserRequestToCompany {
    address public accuworkCompanyWalletAddress;

    struct WorkExperience {
        string employeeName;
        string companyName;
        string position;
        string location;
        uint256 startDate;
        uint256 endDate;
        bool isVerified;
    }

    mapping(address => WorkExperience[]) private workExperiences;

    // When we deploy the smart contract, set accuworkCompanyWalletAddress as our metamask wallet address
    constructor() {
        accuworkCompanyWalletAddress = msg.sender;
    }

    // check user wallet has enough eth to request
    modifier userHasEnoughEth(uint256 amount) {
        require(msg.value >= amount, "Insufficient funds");
        _;
    }

    // Helper function to compare two strings
    function compareStrings(
        string memory a,
        string memory b
    ) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function verifyUserInfo(
        string memory employeeName,
        string memory companyName,
        string memory position,
        string memory location,
        uint256 startDate,
        uint256 endDate
    ) internal pure returns (bool) {
        // Check if the provided information matches the mock data
        bool isValid = compareStrings(employeeName, "John Doe") &&
            compareStrings(companyName, "Google") &&
            compareStrings(position, "Full Stack Developer") &&
            compareStrings(location, "Toronto") &&
            startDate == 123456789 &&
            endDate == 987654321;

        return isValid;
    }

    function addWorkExperienceAndVerifyAndPay(
        string memory employeeName,
        string memory companyName,
        string memory position,
        string memory location,
        uint256 startDate,
        uint256 endDate
    ) external payable returns (bool) {
        // Calculate total amount that user paid
        uint256 totalAmount = msg.value;

        // if the user doesn't have enough money, return false
        if (totalAmount < 0.0002 ether) {
            return false;
        }

        uint256 ethAmountForAccuwork = totalAmount;

        // send money from user wallet to accuwork wallet
        payable(accuworkCompanyWalletAddress).transfer(ethAmountForAccuwork);

        bool isVerified = verifyUserInfo(
            employeeName,
            companyName,
            position,
            location,
            startDate,
            endDate
        );

        // msg.sender is the address of user wallet
        // add user info to blockchain
        WorkExperience memory workExp = WorkExperience({
            employeeName: employeeName,
            companyName: companyName,
            position: position,
            location: location,
            startDate: startDate,
            endDate: endDate,
            isVerified: isVerified
        });

        workExperiences[msg.sender].push(workExp);

        return isVerified;
    }

    // get the all the work experiences of sender
    function getWorkExperiencesBySender()
        public
        view
        returns (WorkExperience[] memory)
    {
        return workExperiences[msg.sender];
    }
}
