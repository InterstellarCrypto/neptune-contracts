# Neptune BSCCore
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

## Instructions for Local Deployment
* Upon cloning the project execute the command below to start a local blockchain fork
  * `./start-local-blockchain-fork.sh`
* Upon running a local blockahin fork, execute the following command from the root directory of the project to deploy a smart contract to your local Ganache.
  * `./deploy-application.sh`
* Ensure the `contracts/NeptuneDeFi.sol` file is referring to a local-ganache token
  * `IUniswapV2Router02 _uniswapV2Router = IUniswapV2Router02(0x98AB334d0041298410D109B2F3437A19C94489B6);`