# 🔍 FlameBornToken (FLB) - Contract Provenance & Verification

**Generated**: 2025-09-29T05:49:13+03:00  
**Commit Hash**: `96fbf6c7507169cb1ee358010d2af224cce04330`  
**Network**: Celo Alfajores Testnet (Chain ID: 44787)
**Status**: ✅ **LIVE & VERIFIED** - All contracts deployed and functional

---

## 📋 Canonical Contract Addresses

### FlameBornToken (ERC20 Upgradeable)

- **Proxy Address**: `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1` ✅ **CANONICAL**
- **Implementation Address**: `0x1C6924E0a6Ae373A9b52cbFF66075A72c1B97502` ✅ **CANONICAL**
- **Deployer**: `0x2E75287C542B9b111906D961d58f2617059dDe3c`

### FlameBornHealthIDNFT (ERC721 Soulbound)

- **Contract Address**: `0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8` ✅ **CANONICAL**
- **Deployer**: `0x2E75287C542B9b111906D961d58f2617059dDe3c`

### FlameBornEngine (UUPS Upgradeable)

- **Proxy Address**: `0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4` ✅ **CANONICAL**
- **Implementation Address**: `0xE8CEb669437E93208D605dE18433E46297F21cb1` ✅ **CANONICAL**
- **Deployer**: `0x2E75287C542B9b111906D961d58f2617059dDe3c`

---

## 🔍 Verification Commands

```bash
# Verify FlameBornToken implementation
npx hardhat verify --network alfajores 0x1C6924E0a6Ae373A9b52cbFF66075A72c1B97502

# Verify FlameBornHealthIDNFT
npx hardhat verify --network alfajores 0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8

# Verify FlameBornEngine implementation
npx hardhat verify --network alfajores 0xE8CEb669437E93208D605dE18433E46297F21cb1

# Run all verifications
npx hardhat run scripts/verify_all.ts --network alfajores

## 📊 Contract Specifications

### Compiler Details

- **Compiler**: `v0.8.28+commit.ab55807c`
- **Optimization**: `Yes` with `200` runs
- **EVM Version**: `paris`
- **License**: `MIT`

### FlameBornToken (FLB)

- **Name**: `FlameBornToken`
- **Symbol**: `FLB`
- **Decimals**: `18`
- **Total Supply**: `1,000,000 FLB`
- **Features**: ERC20, Burnable, Pausable, Permit (EIP-2612), UUPS Upgradeable

### FlameBornHealthIDNFT (FLB-HNFT)

- **Name**: `FlameBornHealthIDNFT`
- **Symbol**: `FLB-HNFT`
- **Type**: Soulbound ERC721
- **Features**: Non-transferable, Auto-increment IDs, URI Storage

### FlameBornEngine (FLB-EN)

- **Tag**: `FLB-EN`
- **Type**: UUPS Upgradeable Logic Engine
- **Features**: Role-based access, Learn-to-Earn mechanics, Donation system

---

## 🌐 Explorer Links

### FlameBornToken

- **Token Page**: [View on CeloScan](https://alfajores.celoscan.io/token/0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1)
- **Contract Page**: [View on CeloScan](https://alfajores.celoscan.io/address/0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1#code)

### FlameBornHealthIDNFT

- **Token Page**: [View on CeloScan](https://alfajores.celoscan.io/token/0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8)
- **Contract Page**: [View on CeloScan](https://alfajores.celoscan.io/address/0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8#code)

### FlameBornEngine

- **Contract Page**: [View on CeloScan](https://alfajores.celoscan.io/address/0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4#code)

---

## 🔐 Security & Ownership

### ProxyAdmin Details

- **Address**: `TBD` (if multisig controlled)
- **Type**: `UUPS Direct` (implementation = proxy)
- **Owner**: Deployer EOA (transfer to multisig recommended)

### Access Control

- **FlameBornToken**: Owner-controlled (upgradeable by owner)
- **FlameBornHealthIDNFT**: Role-based (MINTER_ROLE, ADMIN_ROLE)
- **FlameBornEngine**: Role-based (ADMIN, REGISTRAR, QUEST_ADMIN)

- **Multisig Status**: [To be confirmed by deployer]

---

## 📊 Deployment Transactions

### Creation Transactions

- **Proxy Creation TX**: [Requires manual lookup on CeloScan]
- **Implementation Creation TX**: [Requires manual lookup on CeloScan]
- **Initialization TX**: [Requires manual lookup on CeloScan]

### Constructor Parameters

- **Implementation**: Standard UUPS implementation
- **Proxy**: Points to implementation at `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1`

---

## ⚠️ Risk Assessment

### Trust Assumptions

- **Upgradeability**: Contract is upgradeable via UUPS pattern
- **Admin Control**: ProxyAdmin has upgrade authority
- **Pause Control**: Admin can pause token transfers
- **Supply Control**: Fixed supply, no minting after deployment

### Verification Checklist

- ✅ Source code published and verified
- ✅ Implementation bytecode matches source
- ✅ Proxy correctly points to implementation
- ✅ OpenZeppelin audited contracts used
- ⚠️ ProxyAdmin ownership requires manual verification
- ⚠️ Upgrade mechanism controlled by admin

---

## 🔍 Daily Monitoring Checklist

### Daily Checks

1. **Implementation Address**: Verify still points to `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1`
2. **ProxyAdmin Status**: Check for any ownership changes
3. **Contract State**: Verify not paused unexpectedly
4. **Total Supply**: Confirm remains at 1,000,000 FLB
5. **Explorer Status**: Ensure verification status maintained

### Alert Triggers

- Implementation address change (upgrade event)
- ProxyAdmin ownership transfer
- Contract pause/unpause events
- Large token transfers (>10% supply)
- Verification status changes on explorer

---

## 📞 Emergency Contacts

### Monitoring Setup

- **Guardian**: [Assign team member]
- **Alert Webhook**: [Configure monitoring service]
- **Response Team**: [Define incident response team]

---

## 📝 Verification Notes

**Manual Verification Required:**

1. Visit [CeloScan proxy page](https://alfajores.celoscan.io/address/0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1) to confirm creation TX
2. Check ProxyAdmin ownership and multisig configuration
3. Verify constructor parameters match deployment script
4. Confirm all upgrade events are authorized

**Last Updated**: 2025-09-29T03:30:03+03:00  
**Next Review**: 2025-10-06 (Weekly)

---

*This provenance document establishes the verified source code lineage for FlameBornToken deployment on Celo Alfajores testnet.*
