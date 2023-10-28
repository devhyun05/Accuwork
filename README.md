
# Accuwork

Accuwork uses blockchain technology to securely store employment verification history and export it to third party organization.


## Run Locally


Install dependencies

```bash
  cd estate_chain_backend && npm install
  cd estate_chain_frontend && npm install
```

Deploying the contract and start the server
```bash
  cd estate_chain_backend
  npx hardhat node
  npm run deploy:dev

```

Start the frontend 

```bash
  cd estate_chain_frontend
  npm start
```


## Authors

- [@devhyun05](https://www.github.com/devhyun05)
- [@juliusdejon](https://www.github.com/juliusdejon)


## Acknowledgements

 - [BlockHack](https://blockhack.ca/)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`REACT_APP_COMPANY_WALLET_ADDRESS=""`

`REACT_APP_CONTRACT_ADDRESS=""`

`REACT_APP_ETH_PROVIDER=""`

## Deployment

To deploy this project run

```bash
  cd estate_chain_backend
  yarn deploy:dev 
```


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Solidity, Express

