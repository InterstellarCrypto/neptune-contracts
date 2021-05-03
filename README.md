# NeptuneDeFi BSCCore
* **Objective** - To create a product which ...

## PreRequisites
* Create Ethereum wallet
* Install Chrome, Firefox, Opera
* Install MetaMask
* Link MetaMask to Ethereum Wallet
* Generate MetaMask Test Wallet from Faucet
* Install NodeJS
* Install TruffleJS
* Install Ganache

## Instructions for Creating Your Own Coin
* Execute the command below to install node packages
	* `npm install`
* Execute the command below to create a `.env` file
	* `node ./automation/create-env.js`
* Execute one of the commands below to access truffle console respectively
	1. `truffle console --network ropsten`
	* `truffle migrate --network testnet`
	* `truffle migrate --network bsc`
* Execute the command below from the truffle console
	* `web3.eth.getAccounts()`
* Copy the first address listed
	* send ether to first account listed
* Verify the address has ether after sending it
	* `web3.eth.getBalance('0xAddressOfAccount');`
* Execute the command below from the root directory of this project
	* `./deploy-application.sh`

## Instructions for Testing Smart Contract Deployment

### Part 1 - Adding Liquidity
* Liquidity is what gives your coin the potential to be traded for currency.
* Without Liquidity, there is no way to expend _gas_ to do computations.
	* Ensure liqudity is added to ensure _gas_ is available.

### Part 2 - Executing Test Script
* Execute the command below to test migrating to `testnet`
	* `truffle migrate --network testnet --dry-run`
* Execute the command below to test migrating to `ropsten`
	* `truffle migrate --network ropsten --dry-run`
* Execute the command below to test migrating to `bsc`
	* `truffle migrate --network bsc --dry-run`


## Instructions for Local Deployment
* Upon cloning the project execute the command below to start a local blockchain fork
  * `./start-local-blockchain-fork.sh`
* Upon running a local blockahin fork, execute the following command from the root directory of the project to deploy a smart contract to your local Ganache.
  * `./deploy-application.sh`
* Ensure the `contracts/NeptuneDeFi.sol` file is referring to a local-ganache token
  * `IUniswapV2Router02 _uniswapV2Router = IUniswapV2Router02(0x98AB334d0041298410D109B2F3437A19C94489B6);`
