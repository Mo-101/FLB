import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const Engine = await ethers.getContractFactory("FlameBornEngine");
  const tokenAddress = "0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1";
  const healthNFTAddress = "0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8";
  const engine = await upgrades.deployProxy(Engine, [deployer.address, tokenAddress, healthNFTAddress, ethers.parseEther("100"), 1000], {
    initializer: "initialize",
    kind: "uups",
  });
  await engine.waitForDeployment();
  const engineAddress = await engine.getAddress();
  const engineImpl = await upgrades.erc1967.getImplementationAddress(engineAddress);

  console.log(`✅ FlameBornEngine Proxy deployed at: ${engineAddress}`);
  console.log(`   Implementation at: ${engineImpl}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
