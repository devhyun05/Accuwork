const main = async () => {
  const AccuworkContract = await hre.ethers.getContractFactory("AccuworkContract"); 
  const accuworkContract = await AccuworkContract.deploy("Hello hardhat!");

  await accuworkContract.deployed(); 
}

const runMain = async () => {
  try {
    await main();
    process.exit(0); 
  } catch (error) {
    console.error(error); 
    process.exit(1); 
  }
}

runMain(); 