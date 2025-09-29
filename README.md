# 🔥 FlameBornToken (FLB) – Celo Blockchain Project

**FlameBornToken** is an upgradeable ERC20 token deployed on the Celo blockchain, empowering digital sovereignty and decentralized innovation.

## 🌍 Live Deployments

### 📋 Canonical Contract Addresses

#### 🔥 FlameBornToken (FLB)
- **Proxy Address**: `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1` ✅ **CANONICAL**
- **Implementation Address**: `0x1C6924E0a6Ae373A9b52cbFF66075A72c1B97502` ✅ **CANONICAL**
- **Explorer**: [View on Celoscan](https://alfajores.celoscan.io/token/0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1)
- **Type**: Upgradeable ERC20 with Role-Based Access Control

#### 🏥 FlameBornHealthIDNFT (FLB-HNFT)
- **Contract Address**: `0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8` ✅ **CANONICAL**
- **Explorer**: [View on Celoscan](https://alfajores.celoscan.io/token/0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8)
- **Type**: Soulbound NFT with Role-Based Access Control

#### ⚙️ FlameBornEngine (FLB-EN)
- **Proxy Address**: `0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4` ✅ **CANONICAL**
- **Implementation Address**: `0xE8CEb669437E93208D605dE18433E46297F21cb1` ✅ **CANONICAL**
- **Explorer**: [View on Celoscan](https://alfajores.celoscan.io/address/0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4)
- **Type**: UUPS Upgradeable Learn-to-Earn Engine

---

## ✅ Verification Status

* ✅ FlameBornToken implementation [verified on Celoscan](https://alfajores.celoscan.io/address/0x1C6924E0a6Ae373A9b52cbFF66075A72c1B97502#code)
* ✅ FlameBornHealthIDNFT [verified on Celoscan](https://alfajores.celoscan.io/address/0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8#code)
* ✅ FlameBornEngine implementation [verified on Celoscan](https://alfajores.celoscan.io/address/0xE8CEb669437E93208D605dE18433E46297F21cb1#code)
* ✅ Proxy contracts are linked to their implementations
* ✅ Full provenance documentation: [PROVENANCE.md](PROVENANCE.md)

---

---

## ✅ Test Coverage

The FlameBornEngine has been thoroughly tested with 5 key test cases:

1. **Actor Verification**
   * Verifies actors and mints NFT + FLB rewards
   * Validates role-based access control

2. **Donation Processing**
   * Tests CELO donations and FLB rewards
   * Verifies donor balances tracking

3. **Quest Rewards**
   * Validates FLB distribution for completed quests
   * Tests reward tracking system

4. **Withdrawals**
   * Verifies admin withdrawal functionality
   * Ensures proper fund accounting

5. **Access Control**
   * Validates role-based permissions
   * Tests custom error messages for unauthorized access

## 🧪 Running Tests

Execute the full test suite with:

```sh
npx hardhat test test/engine.test.ts
```

For gas usage reports:

```sh
npx hardhat test test/engine.test.ts --gas-report
```

---

## 🚀 Deployment & Verification

### Deploy (Celo Alfajores)

```sh
npx hardhat run scripts/deploy_engine_celo.ts --network alfajores
```

### Verify on Celoscan

```sh
npx hardhat verify --network alfajores 0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8
```

### Test Engine Functionality

* Use the frontend or scripts to interact with the contract.
* Ensure all functions (donation, rewards, actor verification, etc.) work as expected.

---

## 📊 Token Info

| Property     | Value                               |
| ------------ | ----------------------------------- |
| **Name**     | FlameBornToken                      |
| **Symbol**   | FLB                                 |
| **Decimals** | 18                                  |
| **Supply**   | 1,000,000 FLB                       |
| **Standard** | Upgradeable ERC20                   |
| **Access**   | Ownable + MINTER_ROLE               |

---

## ✨ Key Features

### 🔥 FlameBornToken (FLB)

* ✅ ERC20-compliant & upgradeable
* 🔄 Burnable & pausable
* 🪪 EIP-2612 permit support
* 🔐 OpenZeppelin audited contracts

### 🏥 FlameBornHealthIDNFT (HID)

* 🧾 Soulbound (non-transferable)
* 🛡️ Role-based minting and access
* 📜 IPFS/URI metadata support

### ⚙️ FlameBornEngine

* ⚡ Learn-to-Earn reward distribution
* 🤝 Ties NFT and token logic together
* 🎯 Modular controller pattern (admin-controlled)
* 🧬 Donation-driven FLB mechanics

---

## 🚀 Quick Start

### 🧰 Prerequisites

* Node.js v16+
* npm or yarn
* Hardhat & Git

### 🔧 Setup

```bash
git clone https://github.com/FlameBorn-1/FLB.git
cd FLB
npm install
cp .env.example .env
# Fill .env with your private key and any custom values
```

### 🧪 Compile & Test

```bash
npx hardhat compile
npx hardhat test
```

---

## 📋 Deployment Commands

### 🚀 Orchestrated Deployment (Recommended)

Deploy all contracts in the correct order with automatic dependency management:

```bash
# Deploy all contracts (Token → NFT → Engine)
npx hardhat run scripts/deploy_all.ts --network alfajores
```

### 🛠️ Individual Deployments

```bash
# Deploy individual contracts
npx hardhat run scripts/deploy_token.ts --network alfajores
npx hardhat run scripts/deploy_healthidnft.ts --network alfajores
npx hardhat run scripts/deploy_engine.ts --network alfajores
```

### 🔍 Verification & Testing

```bash
# Verify all contract source code on CeloScan
npx hardhat run scripts/verify_all.ts --network alfajores

# Run functional verification tests
npx hardhat run scripts/verify_deployment.ts --network alfajores

# Run full test suite
npx hardhat test
```

---

## 🧬 Project Structure

```
FLB/
├── contracts/
│   ├── FlameBornToken.sol         # Upgradeable ERC20 with MINTER_ROLE
│   ├── FlameBornHealthIDNFT.sol   # Soulbound NFT with role-based access
│   └── FlameBornEngine.sol        # Learn-to-Earn engine with name/symbol
├── scripts/
│   ├── deploy_all.ts              # 🎼 Orchestrator - deploys all contracts
│   ├── deploy_token.ts            # Deploy FlameBornToken
│   ├── deploy_healthidnft.ts      # Deploy HealthIDNFT
│   ├── deploy_engine.ts           # Deploy FlameBornEngine
│   ├── verify_all.ts              # Source code verification
│   └── verify_deployment.ts       # Functional verification
├── utils/
│   └── deployHelper.ts            # 📦 Deployment state management
├── deployments/
│   └── addresses.json             # 📝 Canonical address registry
├── test/                          # Comprehensive test suite
├── PROVENANCE.md                  # 🔍 Contract provenance & verification
└── LAUNCH_ANNOUNCEMENT.md         # 📢 Community launch materials
```

---

## 🔧 Functions Overview

### Admin

* `grantRole(bytes32, address)`
* `setRewards(uint256)`
* `pause()`, `unpause()`

### User

* `donate()` → triggers reward
* `mint()` → mint HealthID NFT (if authorized)
* `claimReward()` → FLB token incentives

---

## 🌐 Network Config

* **Testnet**: Celo Alfajores
* **RPC**: `https://alfajores-forno.celo-testnet.org`
* **Chain ID**: `44787`
* **Faucet**: [https://faucet.celo.org/alfajores](https://faucet.celo.org/alfajores)
* **Explorer**: [https://alfajores.celoscan.io](https://alfajores.celoscan.io)

---

## 🔐 Security Highlights

* 🔐 UUPS upgradeable pattern
* 🛡️ OpenZeppelin access roles
* 🔍 Verified deployments on Celoscan
* 🧪 Fully tested contracts (see `/test`)

---

## 📚 Resources

* 📘 [Deployment Guide](./DEPLOYMENT_GUIDE.md)
* 🔧 [Celo Docs](https://docs.celo.org/)
* 🔐 [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
* ⚙️ [Hardhat Docs](https://hardhat.org)

---

## 🤝 Contribute

```bash
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```

Then open a Pull Request ✨

---

## 📄 License

MIT — FlameBorn by \[MoStarAI] & Kairo Covenant
See [LICENSE](LICENSE) for details.

---

## 🔗 Links

* 💾 [GitHub Repo](https://github.com/FlameBorn-1/FLB)
* 🔥 [FLB Token](https://alfajores.celoscan.io/token/0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1)
* 🩺 [FlameBornHealthIDNFT](https://alfajores.celoscan.io/token/0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8)
* 🔥 [FlameBornEngine](https://alfajores.celoscan.io/address/0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4)
* 🧠 [Celo](https://celo.org/)
* 🧱 [OpenZeppelin](https://openzeppelin.com/)

---

*"When the LION learns to CODE, the HUNTER's story ends."* 🦁

---

## 🔍 Contract Verification & Provenance Steps

| Step | I can do for you | You do |
|------|------------------|--------|
| 1 | Reconstruct the full 14-file source bundle from the fragments you sent and confirm filenames match CeloScan. | Confirm the proxy address is `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1` (the token page) or paste the proxy creation TX. |
| 2 | Read the proxy IMPLEMENTATION_SLOT, locate the implementation address, and fetch its explorer Code tab. | If you see the implementation URL or creation TX on CeloScan, paste it here. |
| 3 | Extract proxy and implementation creation TX hashes and decode constructor/init calldata (report decoded params). | Copy the creation TX hashes from CeloScan if needed and paste them here. |
| 4 | Verify the implementation's Code tab (compiler, optimization, EVM) and compare deployed bytecode to the compiled bytecode from the source you provided. | Paste the GitHub commit hash you want tied to this verification (the exact commit containing the 14-file source set). |
| 5 | Inspect ProxyAdmin ownership, report whether it is a multisig or single EOA, and list signers if available. | If ProxyAdmin is a multisig you control, paste the multisig dashboard link or signer addresses and threshold. |
| 6 | Produce a filled PROVENANCE.md with creation TXs, implementation address, compiler info, bytecode match result, ProxyAdmin details, and timestamp. | Push PROVENANCE.md to the repo and paste the commit URL here so I can embed it in the pinned follow-up. |
| 7 | Draft the thread-ready announcement + pinned follow-up tweet with exact links and the one-line risk caveat. | Post the announcement thread and pin the follow-up once PROVENANCE.md is live. |
| 8 | Create a short daily-check checklist and an alert template for monitoring upgrades or impersonation. | Assign a guardian or teammate to run the daily check or wire the alert webhook. |

### **Bold immediate action (one line)**

Paste the proxy creation TX or confirm the proxy address and paste the GitHub commit hash you want tied to verification; I'll finish steps 2–6 and return PROVENANCE.md plus pinned-thread copy-ready text.


