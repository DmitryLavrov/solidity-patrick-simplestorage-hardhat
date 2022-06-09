import '@nomiclabs/hardhat-waffle'
import 'dotenv/config'
import '@nomiclabs/hardhat-etherscan'
import './tasks/accounts'
import './tasks/block-number'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'

const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL || ''
const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY || ''

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || ''
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY || ''

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ''

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.7',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    ganache: {
      url: GANACHE_RPC_URL,
      accounts: [GANACHE_PRIVATE_KEY],
      chainId: 1337
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 4
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      // accounts: It's Hardhat!
      chainId: 31337
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    // outputFile: "gas-report.txt",
    // noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    // token: 'MATIC', // Use gasPriceApi for Polygon
  },
}
