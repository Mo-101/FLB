import { ethers } from "hardhat";
import { createDeployHelper } from "../utils/deployHelper";
import { execSync } from "child_process";
import path from "path";

async function main() {
  console.log("🎼 FLAMEBORN ORCHESTRATOR - DEPLOYING ALL CONTRACTS");
  console.log("====================================================");

  const [deployer] = await ethers.getSigners();
  const network = await ethers.provider.getNetwork();
  const helper = createDeployHelper(network.name);

  helper.setDeployer(deployer.address);

  console.log(`📍 Network: ${network.name}`);
  console.log(`👤 Deployer: ${deployer.address}`);
  console.log("");

  // Check current deployment status
  console.log("📊 PRE-DEPLOYMENT STATUS:");
  console.log(`   Token: ${helper.isDeployed("FlameBornToken") ? "✅ DEPLOYED" : "⏳ PENDING"}`);
  console.log(`   NFT: ${helper.isDeployed("FlameBornHealthIDNFT") ? "✅ DEPLOYED" : "⏳ PENDING"}`);
  console.log(`   Engine: ${helper.isDeployed("FlameBornEngine") ? "✅ DEPLOYED" : "⏳ PENDING"}`);
  console.log("");

  let tokenAddress: string;
  let nftAddress: string;
  let engineAddress: string;

  // 🎼 ACT 1: Deploy Token (First, no dependencies)
  console.log("🎼 ACT 1: DEPLOYING FLAMEBORN TOKEN");
  console.log("-----------------------------------");

  try {
    console.log("Running: npx hardhat run scripts/deploy_token.ts --network", network.name);
    execSync(`npx hardhat run scripts/deploy_token.ts --network ${network.name}`, {
      stdio: "inherit",
      cwd: path.join(__dirname, "..")
    });

    tokenAddress = helper.getAddress("FlameBornToken")!;
    console.log(`✅ Token deployed at: ${tokenAddress}`);
  } catch (error) {
    console.error("❌ Token deployment failed:", error);
    process.exit(1);
  }

  console.log("");

  // 🎼 ACT 2: Deploy NFT (Second, no dependencies)
  console.log("🎼 ACT 2: DEPLOYING HEALTH ID NFT");
  console.log("--------------------------------");

  try {
    console.log("Running: npx hardhat run scripts/deploy_healthidnft.ts --network", network.name);
    execSync(`npx hardhat run scripts/deploy_healthidnft.ts --network ${network.name}`, {
      stdio: "inherit",
      cwd: path.join(__dirname, "..")
    });

    nftAddress = helper.getAddress("FlameBornHealthIDNFT")!;
    console.log(`✅ NFT deployed at: ${nftAddress}`);
  } catch (error) {
    console.error("❌ NFT deployment failed:", error);
    process.exit(1);
  }

  console.log("");

  // 🎼 ACT 3: Deploy Engine (Last, depends on Token + NFT)
  console.log("🎼 ACT 3: DEPLOYING FLAMEBORN ENGINE");
  console.log("-----------------------------------");

  try {
    console.log("Running: npx hardhat run scripts/deploy_engine.ts --network", network.name);
    execSync(`npx hardhat run scripts/deploy_engine.ts --network ${network.name}`, {
      stdio: "inherit",
      cwd: path.join(__dirname, "..")
    });

    engineAddress = helper.getAddress("FlameBornEngine")!;
    console.log(`✅ Engine deployed at: ${engineAddress}`);
  } catch (error) {
    console.error("❌ Engine deployment failed:", error);
    process.exit(1);
  }

  console.log("");
  console.log("🎉 DEPLOYMENT COMPLETE!");
  console.log("=======================");

  // Final status report
  console.log("\n📋 FINAL CONTRACT ADDRESSES:");
  console.log(`🔥 FlameBornToken: ${tokenAddress}`);
  console.log(`🏥 FlameBornHealthIDNFT: ${nftAddress}`);
  console.log(`⚙️  FlameBornEngine: ${engineAddress}`);

  console.log("\n📄 Deployment Summary:");
  console.log(helper.getSummary());

  console.log("\n🌍 View on CeloScan:");
  console.log(`Token: https://alfajores.celoscan.io/token/${tokenAddress}`);
  console.log(`NFT: https://alfajores.celoscan.io/token/${nftAddress}`);
  console.log(`Engine: https://alfajores.celoscan.io/address/${engineAddress}`);

  console.log("\n✅ All contracts deployed and configured!");
  console.log("✅ Permissions granted to Engine!");
  console.log("✅ Ready for launch! 🚀");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
