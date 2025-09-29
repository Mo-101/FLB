import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("FlameBornToken");
  const token = await upgrades.deployProxy(Token, [deployer.address], {
    initializer: "initialize",
    kind: "uups",
  });
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  const tokenImpl = await upgrades.erc1967.getImplementationAddress(tokenAddress);

  console.log(`✅ FlameBornToken Proxy deployed at: ${tokenAddress}`);
  console.log(`   Implementation at: ${tokenImpl}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
