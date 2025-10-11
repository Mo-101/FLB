import { ethers, run } from "hardhat";
import fs from "fs";

async function verify(address: string, ctor: unknown[] = [], contract?: string) {
  try {
    await run("verify:verify", { address, constructorArguments: ctor, contract });
    console.log(`✅ Verified ${address}`);
  } catch (error: any) {
    console.log(`ℹ️  Skip ${address}: ${error.message}`);
  }
}

async function main() {
  const network = await ethers.provider.getNetwork();
  const filePath = `deployments/${network.name}.json`;

  if (!fs.existsSync(filePath)) {
    throw new Error(`Deployment manifest ${filePath} not found.`);
  }

  const manifest = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (manifest.FlameBornToken?.implementation) {
    await verify(manifest.FlameBornToken.implementation);
  }
  if (manifest.FlameBornToken?.proxy) {
    console.log(
      "ℹ️  Skipping automatic proxy verification for FlameBornToken. Provide constructor data via TOKEN_PROXY_DATA env if needed."
    );
  }

  if (manifest.FlameBornEngine?.implementation) {
    await verify(manifest.FlameBornEngine.implementation);
  }
  if (manifest.FlameBornEngine?.proxy) {
    console.log(
      "ℹ️  Skipping automatic proxy verification for FlameBornEngine. Provide constructor data via ENGINE_PROXY_DATA env if needed."
    );
  }

  if (manifest.FlameBornHealthIDNFT?.address) {
    await verify(manifest.FlameBornHealthIDNFT.address, []);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});