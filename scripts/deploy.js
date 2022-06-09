const {ethers, run, network} = require('hardhat')

async function main() {
  const contractFactory = await ethers.getContractFactory('SimpleStorage')
  console.log('Deploying contract...')
  const contract = await contractFactory.deploy()
  await contract.deployed()
  console.log(`Deployed contract to: ${contract.address}`)

  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    console.log('Waiting for block confirmations...')
    await contract.deployTransaction.wait(3)
    await verify(contract.address, [])
  }

  // Interacting with contract
  const currentValue = await contract.retrieve()
  console.log(`Current Value is: ${currentValue}`)
  const transactionResponse = await contract.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await contract.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
}

async function verify(contractAddress, args) {
  console.log('Verifying...')
  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: args
    })
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already verified!')
    } else {
      console.log(e)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
