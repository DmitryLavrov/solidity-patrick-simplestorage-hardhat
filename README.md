## Getting Started

### Prerequisites

```shell
npm i npm@latest -g
npm init -y
```

### Installation

```shell
npm i -D hardhat
npx hardhat
```

√ What do you want to do? · Create a basic sample project                   
√ Hardhat project root: · C:\Projects\solidity-patrick-simplestorage-hardhat √ Do you want to add a .gitignore? (Y/n) ·
y

You need to install these dependencies to run the sample project:

```
npm install --save-dev "hardhat@^2.9.7" "@nomiclabs/hardhat-waffle@^2.0.0" "ethereum-waffle@^3.0.0" "chai@^4.2.0" "@nomiclabs/hardhat-ethers@^2.0.0" "ethers@^5.0.0"
```

```  
npm i dotenv
npm i -D @nomiclabs/hardhat-etherscan
npm i -D hardhat-gas-reporter
npm i -D solidity-coverage
```

## Resources

Lesson 6 of the FreeCodeCamp Solidity & Javascript Blockchain Course
* https://github.com/PatrickAlphaC/hardhat-simple-storage-fcc

Chainlist
* https://chainlist.org/

Plugin hardhat-etherscan (Verification)
* https://docs.etherscan.io/misc-tools-and-utilities/plugins#hardhat-etherscan
* https://hardhat.org/plugins/nomiclabs-hardhat-etherscan

Plugin hardhat-gas-reporter
* https://www.npmjs.com/package/hardhat-gas-reporter

Plugin solidity-coverage
* https://www.npmjs.com/package/solidity-coverage


# Usage

## Useful commands

```shell
# See Hardhat's fake accounts
npx hardhat accounts

# Compile files in ./contracts
npx hardhat compile

# Delete folder artefacts and clear folder cash
npx hardhat clean

# Test project (gasReporter starts too)
npx hardhat test

# Code coverage for Solidity testing
npx hardhat coverage
```

## Deploy

```shell
# run deploy script  
npx hardhat run scripts/deploy.js 

# deploy to Hardhat (default)
npx hardhat run scripts/deploy.js --network hardhat

# deploy to Ganache (need to update GANACHE_PRIVATE_KEY and GANACHE_RPC_URL
npx hardhat run scripts/deploy.js --network ganache

# deploy to Rinkeby
npx hardhat run scripts/deploy.js --network rinkeby
```

## Interacting with Contracts in Hardhat
#### Terminal 1:
```shell
npx hardhat node
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

#### Terminal 2:
```shell
hardhat run scripts/deploy.js --network localhost
```

## Gas reporting
```shell
npx hardhat test
```
```text
·----------------------------|----------------------------|-------------|-----------------------------·
|    Solc version: 0.8.7     ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
·····························|····························|·············|······························
|  Methods                   ·               33 gwei/gas                ·       1815.40 usd/eth       │
··················|··········|··············|·············|·············|···············|··············
|  Contract       ·  Method  ·  Min         ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··················|··········|··············|·············|·············|···············|··············
|  SimpleStorage  ·  store   ·           -  ·          -  ·      43724  ·            2  ·       2.62  │
··················|··········|··············|·············|·············|···············|··············
|  Deployments               ·                                          ·  % of limit   ·             │
·····························|··············|·············|·············|···············|··············
|  SimpleStorage             ·           -  ·          -  ·     463682  ·        1.5 %  ·      27.78  │
·----------------------------|--------------|-------------|-------------|---------------|-------------·
```
## Coverage
```shell
npx hardhat coverage
```
```text
--------------------|----------|----------|----------|----------|----------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------|----------|----------|----------|----------|----------------|
 contracts\         |       50 |      100 |    66.67 |       50 |                |
  SimpleStorage.sol |       50 |      100 |    66.67 |       50 |          25,26 |
--------------------|----------|----------|----------|----------|----------------|
All files           |       50 |      100 |    66.67 |       50 |                |
--------------------|----------|----------|----------|----------|----------------|
```
