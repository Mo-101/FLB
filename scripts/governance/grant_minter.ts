import { ethers } from "hardhat";

async function main() {
  const tokenAddress = process.env.FLB_ADDR;
  const minter = process.env.MINTER;

  if (!tokenAddress) {
    throw new Error("Set FLB_ADDR=token_proxy_address in the environment");
  }

  if (!minter) {
    throw new Error("Set MINTER=address_to_grant in the environment");
  }

  const token = await ethers.getContractAt("FlameBornToken", tokenAddress);
  const role = await token.MINTER_ROLE();

  const hasRole = await token.hasRole(role, minter);
  if (hasRole) {
    console.log(`Address ${minter} already has MINTER_ROLE.`);
    return;
  }

  const tx = await token.grantRole(role, minter);
  const receipt = await tx.wait();

  console.log(`Granted MINTER_ROLE to ${minter}. Tx hash: ${receipt?.hash ?? tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
