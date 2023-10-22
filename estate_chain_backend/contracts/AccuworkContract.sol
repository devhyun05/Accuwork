// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract WorkHistoryContract {
    address public admin;  // Contract 관리자 (예: 플랫폼 소유자)

    mapping(address => mapping(address => bool)) public workHistory;

    event WorkHistoryVerified(address indexed employee, address indexed employer, bool verified);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    function verifyWorkHistory(address employee, address employer) external onlyAdmin {
        workHistory[employee][employer] = true;
        emit WorkHistoryVerified(employee, employer, true);
    }
}
