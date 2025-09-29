import { run } from "hardhat";

async function main() {
  // Replace with your deployed addresses
  const contracts = [
    { name: "FlameBornToken", address: "0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1" },
    { name: "FlameBornEngine", address: "0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4" },
    { name: "FlameBornHealthIDNFT", address: "0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8" }
  ];

  for (const c of contracts) {
    console.log(`Verifying ${c.name} at ${c.address}...` );
    try {
      await run("verify:verify", {
        address: c.address,
        constructorArguments: [], // adjust if constructors need args
      });
      console.log(`✅ ${c.name} verified` );
    } catch (error: any) {
      if (error.message.toLowerCase().includes("already verified")) {
        console.log(`ℹ️ ${c.name} already verified` );
      } else {
        console.error(error);
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
