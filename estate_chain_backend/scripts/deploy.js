const main = async () => {
  const UserRequestToCompany = await hre.ethers.getContractFactory(
    "UserRequestToCompany"
  );
  const userReqestContract = await UserRequestToCompany.deploy();

  // await userReqestContract.deployed();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
