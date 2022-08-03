// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor () ERC20("TestToken", "TTK") {}

    function mint(uint256 amount) public {
        _mint(msg.sender, amount);
    }
}