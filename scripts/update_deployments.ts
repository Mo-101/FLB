import fs from "fs";
import path from "path";

async function main() {
  const deploymentsFilePath = path.join(__dirname, "..", "deployments", "latest.json");
  if (!fs.existsSync(deploymentsFilePath)) {
    console.error("🛑 Deployment info file not found. Please run the deployment script first.");
    process.exit(1);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(deploymentsFilePath, "utf8"));

  const { deployerAddress, FlameBornToken, FlameBornHealthIDNFT, FlameBornEngine } = deploymentInfo;
  const network = "alfajores";
  const celoscanBase = `https://alfajores.celoscan.io`;

  // Update DEPLOYMENTS.md
  const deploymentsMdContent = `
# FlameBorn Contracts — Alfajores Testnet Deployment

## FlameBornToken (FLB)
- Proxy: ${FlameBornToken.proxyAddress}
- Implementation: ${FlameBornToken.implementationAddress}
- Admin/Owner: ${deployerAddress}

## FlameBornEngine (FLB-EN)
- Proxy: ${FlameBornEngine.proxyAddress}
- Implementation: ${FlameBornEngine.implementationAddress}
- Admin/Owner: ${deployerAddress}

## FlameBornHealthIDNFT (FLB-HNFT)
- Contract: ${FlameBornHealthIDNFT.address}

---

_Last updated: ${new Date().toISOString()}_
`;

  const deploymentsMdPath = path.join(__dirname, "..", "DEPLOYMENTS.md");
  fs.writeFileSync(deploymentsMdPath, deploymentsMdContent.trim() + "\n", "utf8");
  console.log("✅ DEPLOYMENTS.md updated!");

  // Update PROVENANCE.md
  const provenanceMdContent = `
# 🔍 FlameBornToken (FLB) - Contract Provenance & Verification

**Generated**: ${new Date().toISOString()}
**Commit Hash**: 
- TBD -
**Network**: Celo Alfajores Testnet (Chain ID: 44787)

---

## 📋 Canonical Contract Addresses

### FlameBornToken (ERC20 Upgradeable)

- **Proxy Address**: 
${FlameBornToken.proxyAddress}
 ✅ **CANONICAL**
- **Implementation Address**: 
${FlameBornToken.implementationAddress}
- **Deployer**: 
${deployerAddress}

### FlameBornHealthIDNFT (ERC721 Soulbound)

- **Contract Address**: 
${FlameBornHealthIDNFT.address}
 ✅ **CANONICAL**
- **Deployer**: 
${deployerAddress}

### FlameBornEngine (UUPS Upgradeable)

- **Proxy Address**: 
${FlameBornEngine.proxyAddress}
 ✅ **CANONICAL**
- **Implementation Address**: 
${FlameBornEngine.implementationAddress}
- **Deployer**: 
${deployerAddress}

---

## 🌐 Explorer Links

### FlameBornToken

- **Token Page**: [View on CeloScan](${celoscanBase}/token/${FlameBornToken.proxyAddress})
- **Contract Page**: [View on CeloScan](${celoscanBase}/address/${FlameBornEngine.proxyAddress}#code)

### FlameBornHealthIDNFT

- **Token Page**: [View on CeloScan](${celoscanBase}/token/${FlameBornHealthIDNFT.address})
- **Contract Page**: [View on CeloScan](${celoscanBase}/address/${FlameBornHealthIDNFT.address}#code)

### FlameBornEngine

- **Contract Page**: [View on CeloScan](${celoscanBase}/address/${FlameBornEngine.proxyAddress}#code)

---

## 📊 Deployment Transactions

### Creation Transactions

- **FlameBornToken Proxy Creation TX**: [View on CeloScan](${celoscanBase}/tx/${FlameBornToken.deploymentTransaction})
- **FlameBornHealthIDNFT Creation TX**: [View on CeloScan](${celoscanBase}/tx/${FlameBornHealthIDNFT.deploymentTransaction})
- **FlameBornEngine Proxy Creation TX**: [View on CeloScan](${celoscanBase}/tx/${FlameBornEngine.deploymentTransaction})

---
`;

  const provenanceMdPath = path.join(__dirname, "..", "PROVENANCE.md");
  fs.writeFileSync(provenanceMdPath, provenanceMdContent.trim() + "\n", "utf8");
  console.log("✅ PROVENANCE.md updated!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
