// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.15;

contract Greeter {
    string private greeting;

    event GreetingSet(string greeting);
    event ConstructorCalled(string greeting);

    constructor(string memory _greeting) {
        require(bytes(_greeting).length > 0, "Greeting must not be empty");
        emit ConstructorCalled(_greeting);
        greeting = _greeting;
        emit GreetingSet(_greeting);
    }

    function greet() public view returns (string memory) {
        return greeting;
    }
}