// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CompanyVerifyRequest {
    address public admin; // Contract 관리자 (예: 플랫폼 소유자)

    struct WorkExperience {
        string url;
    }

    mapping(address => mapping(address => WorkExperience)) public workHistory;

    event WorkHistoryVerified(
        address indexed employee,
        address indexed employer,
        WorkExperience workExperience
    );

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    function verifyWorkHistory(
        address employee,
        address employer,
        string memory employeeName,
        string memory companyName,
        string memory position,
        string memory location,
        uint256 startDate,
        uint256 endDate
    ) external onlyAdmin {}
}
