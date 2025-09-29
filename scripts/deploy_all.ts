import { ethers, upgrades } from "hardhat";
import fs from "fs";
import path from "path";

async function main() {
  console.log("🚀 Deploying FlameBorn Contracts...");

  const [deployer] = await ethers.getSigners();

  // 🔹 1. Deploy FlameBornToken (Upgradeable Proxy)
  const Token = await ethers.getContractFactory("FlameBornToken");
  const token = await upgrades.deployProxy(Token, [deployer.address], {
    initializer: "initialize",
    kind: "uups",
  });
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  const tokenImpl = await upgrades.erc1967.getImplementationAddress(tokenAddress);
  const tokenTx = token.deploymentTransaction();

  console.log(`✅ FlameBornToken Proxy deployed at: ${tokenAddress}`);
  console.log(`   Implementation at: ${tokenImpl}`);

  // 🔹 3. Deploy FlameBornHealthIDNFT (Direct, not upgradeable)
  const HealthNFT = await ethers.getContractFactory("FlameBornHealthIDNFT");
  const healthNFT = await HealthNFT.deploy(deployer.address);
  await healthNFT.waitForDeployment();
  const healthNFTAddress = await healthNFT.getAddress();
  const healthNFTTx = healthNFT.deploymentTransaction();
  console.log(`✅ FlameBornHealthIDNFT deployed at: ${healthNFTAddress}`);

  // 🔹 2. Deploy FlameBornEngine (Upgradeable Proxy)
  const Engine = await ethers.getContractFactory("FlameBornEngine");
  const engine = await upgrades.deployProxy(Engine, [deployer.address, tokenAddress, healthNFTAddress, ethers.parseEther("100"), 1000], {
    initializer: "initialize",
    kind: "uups",
  });
  await engine.waitForDeployment();
  const engineAddress = await engine.getAddress();
  const engineImpl = await upgrades.erc1967.getImplementationAddress(engineAddress);
  const engineTx = engine.deploymentTransaction();
  console.log(`✅ FlameBornEngine Proxy deployed at: ${engineAddress}`);
  console.log(`   Implementation at: ${engineImpl}`);

  console.log("\n🎯 Deployment complete!");

  const deploymentInfo = {
    deployerAddress: deployer.address,
    FlameBornToken: {
      name: "FlameBornToken",
      proxyAddress: tokenAddress,
      implementationAddress: tokenImpl,
      deploymentTransaction: tokenTx?.hash,
    },
    FlameBornHealthIDNFT: {
      name: "FlameBornHealthIDNFT",
      address: healthNFTAddress,
      deploymentTransaction: healthNFTTx?.hash,
    },
    FlameBornEngine: {
      name: "FlameBornEngine",
      proxyAddress: engineAddress,
      implementationAddress: engineImpl,
      deploymentTransaction: engineTx?.hash,
    },
  };

  const dirPath = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, "latest.json");
  fs.writeFileSync(filePath, JSON.stringify(deploymentInfo, null, 2));

  console.log(`\n✅ Deployment info saved to ${filePath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
