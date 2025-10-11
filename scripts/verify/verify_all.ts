import { run, upgrades } from "hardhat";

async function main() {
  console.log("🔍 Starting contract verification...");

  // -----------------------------
  // FlameBornToken (Proxy + Impl)
  // -----------------------------
  const tokenProxy = "0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1";
  const tokenImpl = await upgrades.erc1967.getImplementationAddress(tokenProxy);

  console.log("\n✅ Verifying FlameBornToken implementation...");
  try {
    await run("verify:verify", {
      address: tokenImpl,
      constructorArguments: [],
    });
    console.log(`   Impl verified: ${tokenImpl}`);
  } catch (err: any) {
    console.error(`   Impl verification skipped/error: ${err.message}`);
  }

  console.log("✅ Verifying FlameBornToken proxy...");
  try {
    await run("verify:verify", {
      address: tokenProxy,
      constructorArguments: [tokenImpl, "0x2E75287C542B9b111906D961d58f2617059dDe3c", "0x"], // ProxyAdmin owner, no init calldata
      contract: "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol:ERC1967Proxy",
    });
    console.log(`   Proxy verified: ${tokenProxy}`);
  } catch (err: any) {
    console.error(`   Proxy verification skipped/error: ${err.message}`);
  }

  // -----------------------------
  // FlameBornEngine (Proxy + Impl)
  // -----------------------------
  const engineProxy = "0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4";
  const engineImpl = await upgrades.erc1967.getImplementationAddress(engineProxy);

  console.log("\n✅ Verifying FlameBornEngine implementation...");
  try {
    await run("verify:verify", {
      address: engineImpl,
      constructorArguments: [],
    });
    console.log(`   Impl verified: ${engineImpl}`);
  } catch (err: any) {
    console.error(`   Impl verification skipped/error: ${err.message}`);
  }

  console.log("✅ Verifying FlameBornEngine proxy...");
  try {
    await run("verify:verify", {
      address: engineProxy,
      constructorArguments: [engineImpl, "0x2E75287C542B9b111906D961d58f2617059dDe3c", "0x"],
      contract: "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol:ERC1967Proxy",
    });
    console.log(`   Proxy verified: ${engineProxy}`);
  } catch (err: any) {
    console.error(`   Proxy verification skipped/error: ${err.message}`);
  }

  // -----------------------------
  // FlameBornHealthIDNFT (Direct)
  // -----------------------------
  const healthNFT = "0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8";

  console.log("\n✅ Verifying FlameBornHealthIDNFT...");
  try {
    await run("verify:verify", {
      address: healthNFT,
      constructorArguments: ["0x2E75287C542B9b111906D961d58f2617059dDe3c"], // deployer address
    });
    console.log(`   Verified: ${healthNFT}`);
  } catch (err: any) {
    console.error(`   Verification skipped/error: ${err.message}`);
  }

  console.log("\n🎯 Verification process completed!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});