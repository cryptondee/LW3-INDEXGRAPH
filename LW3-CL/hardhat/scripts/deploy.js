const { hexStripZeros } = require("ethers/lib/utils");
const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");

async function main() {
  const randomWinnerGame = await ethers.getContractFactory("RandomWinnerGame");
  const RandomWinnerGame = await randomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  );
  await RandomWinnerGame.deployed();
  console.log(`Verify Contract address: ${RandomWinnerGame.address}`);
  console.log(`sleeping...`);
  await sleep(30000);
  await hre.run("verify:verify", {
    address: RandomWinnerGame.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
