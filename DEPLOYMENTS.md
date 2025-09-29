# Kairo Covenant AI System - Deployment History

This file tracks all deployments of the Kairo Covenant AI System contracts across different networks.

## ✅ Active Deployments

### FlameBornHealthIDNFT v1.0 - Celo Alfajores Testnet

**Deployment Date**: July 28, 2025
**Status**: ✅ Active & Verified
**Network**: Celo Alfajores Testnet (Chain ID: 44787)

#### Contract Addresses

- **🏷️ Contract Address**: `0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8`
- **👤 Admin**: `0x2E75287C542B9b111906D961d58f2617059dDe3c`

#### Token Details

- **Name**: FlameBornHealthIDNFT
- **Symbol**:FLB-HNFT
- **Type**: Soulbound ERC721 (Non-transferable)

#### Features

- ✅ ERC721 Standard Compliance
- ✅ Soulbound (Non-transferable)
- ✅ Role-Based Access Control (`MINTER_ROLE`, `MULTISIG_ROLE`)
- ✅ `ERC721URIStorage` for metadata

---

### FlameBornToken v1.0 - Celo Alfajores Testnet

**Deployment Date**: July 28, 2025  
**Status**: ✅ Active & Verified  
**Network**: Celo Alfajores Testnet (Chain ID: 44787)

#### Contract Addresses

- **🏷️ Proxy Address**: `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1`
- **🧠 Implementation**: `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1`
- **👤 Owner**: `0x2E75287C542B9b111906D961d58f2617059dDe3c`

#### Token Details

- **Name**: FlameBornToken
- **Symbol**: FLB
- **Decimals**: 18
- **Initial Supply**: 1,000,000 FLB
- **Total Supply**: 1,000,000 FLB (all minted to owner)

#### Features

- ✅ ERC20 Standard Compliance
- ✅ Upgradeable (UUPS Pattern)
- ✅ Burnable Tokens
- ✅ Pausable Transfers
- ✅ EIP-2612 Permit Support
- ✅ Owner Access Control

#### Verification Status

- **Contract Verified**: ✅ Yes
- **Source Code**: Available on Celoscan
- **Explorer**: [View on Celoscan](https://alfajores.celoscan.io/address/0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1)

#### Deployment Configuration

- **Compiler Version**: Solidity 0.8.24
- **Optimization**: Enabled (200 runs)
- **Gas Used**: ~2.5 CELO
- **Deployment Script**: `scripts/deploy_flameborn_celo.ts`

#### OpenZeppelin Upgrades

- **Network File**: `.openzeppelin/celo-alfajores.json`
- **Proxy Type**: UUPS (Universal Upgradeable Proxy Standard)
- **Admin**: Contract owner (via UUPS pattern)

---

## 📋 Deployment Commands

### Deploy FlameBornToken

```bash
npx hardhat run scripts/deploy_flameborn_celo.ts --network alfajores
```

### Verify Deployment

```bash
npx hardhat run scripts/verify_deployment.ts --network alfajores
```

### Verify on Explorer

```bash
npx hardhat verify --network alfajores <IMPLEMENTATION_ADDRESS>
```

---

## 🗂️ Network Configuration

### Celo Alfajores Testnet

- **RPC URL**: <https://alfajores-forno.celo-testnet.org>
- **Chain ID**: 44787
- **Explorer**: <https://alfajores.celoscan.io>
- **Faucet**: <https://faucet.celo.org/alfajores>
- **Gas Token**: CELO

---

## 🔄 Upgrade History

### v1.0 (Current)

- **Date**: January 28, 2025
- **Changes**: Initial deployment
- **Implementation**: `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1`
- **Features**: Full ERC20 with burn, pause, permit, and upgrade capabilities

---

## 🚨 Deprecated/Old Deployments

*No deprecated deployments yet.*

---

## 📝 Notes

- All deployments use OpenZeppelin's battle-tested upgradeable contracts
- The proxy pattern allows for future upgrades while maintaining the same address
- Only the contract owner can perform administrative functions (pause, mint, upgrade)
- The contract follows the UUPS upgrade pattern for gas efficiency

---

## 🔐 Security Considerations

- **Private Keys**: Never commit private keys to version control
- **Environment Variables**: Use `.env` file for sensitive configuration
- **Access Control**: Only authorized addresses can perform admin functions
- **Upgrades**: Upgrades require owner authorization and should be thoroughly tested

---

*Last Updated: July 28, 2025*
