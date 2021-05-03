#!/bin/bash
echo "Cleaning up work space"
rm -rf build
rm -rf node_modules

echo "Building work space"
npm install
# node ./automation/create-env.js
# node ./automation/echo-account-address.js
echo "Fetch Account Address and Populate Liquidity Pool; Send Ether."
read -p "Press enter to continue to smart contract build & deployment."


echo "Building smart contract."
truffle version
truffle compile

echo "Deploying smart contract."
# truffle deploy --network ropsten
truffle migrate --network testnet
echo "Smart contract deployed"
echo "Enter the transaction address of the contract in testnet.bscscan.com"
read -p "Press enter to close window ..."