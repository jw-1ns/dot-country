# Testing

## Overview

Testing of the services are dependent on ens infrastructure deployed by [ens-deployer](https://github.com/harmony-one/ens-deployer). This means that running tests standalone on hardhat will not work. Instead we test against a local ganache instance. We do this by modifying `package.json` adding this line `"test": "npx hardhat test --network local",`

Below are the instructions for local testing.

**Setup**

**ens-deployer**

```
# Clone the repo
git clone https://github.com/harmony-one/ens-deployer.git
cd ens-deployer

# Start local ganache environment
cd env
cd .env
./ganache-new.sh

# Install npm packages (seperate window)
cd ens-deployer
cd contract 
yarn install

# deploy ens contracts locally
yarn deploy --network local

```

**dot-country**

```
# Clone the repo
git clone https://github.com/harmony-one/dot-country
cd dot-country

# Install npm packages
cd contracts
yarn install

# Test
yarn test

```

