import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const HealthNFT = await ethers.getContractFactory("FlameBornHealthIDNFT");
  const healthNFT = await HealthNFT.deploy(deployer.address);
  await healthNFT.waitForDeployment();
  const healthNFTAddress = await healthNFT.getAddress();

  console.log(`✅ FlameBornHealthIDNFT deployed at: ${healthNFTAddress}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
