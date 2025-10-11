# FlameBorn — Deployments (Alfajores & Mainnet)

**Policy:** Zero initial supply. FLB only mints on verified action via Engine/Guardian.

## Networks
- **Alfajores (Celo Testnet / 44787)**
  - FlameBornToken: `0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1`
  - FlameBornEngine: `0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4`
  - FlameBornHealthIDNFT: `0x1566c75a1Bad93a9fa5E2Da690395987E36e08e8`
  - Verification: Published on Celoscan / Blockscout (constructor and initializer args documented below)

- **Celo Mainnet (42220)**
  - _Not deployed yet (intentionally)._ All references remain placeholders until mainnet go-live.

## Constructor / Initializer Args
- **FlameBornToken**: `(admin: address)` – grants `DEFAULT_ADMIN_ROLE` and `MINTER_ROLE`, no mint.
- **FlameBornEngine**: `(admin: address, token: address, nFT: address, actorReward: uint256, donationRewardRate: uint256)` – Engine holds `MINTER_ROLE`.
- **FlameBornHealthIDNFT**: `(admin: address)` – soulbound NFT with registrar roles.

## Post-deploy Steps (Alfajores)
1. Grant `MINTER_ROLE` to Engine:

   ```bash
   npm run gov:grant-minter -- FLB_ADDR=0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1 MINTER=0x82cA6C5FE9d7E834D908a2482aB76A51D64f5BB4
   ```

2. Smoke tests:

   ```bash
   npm run read:supply --
   npm run read:balance -- ADDR=0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1 WHO=<your_eoa>
   ```

3. Verify:

   ```bash
   npm run verify:flb -- FLB_ADDR=0x2806D0C068E0Bdd553Fd9d533C40cAFA6657b5f1 FLB_ADMIN=<admin_address>
   npm run verify:all
   ```

## Canonical Record
The single source of truth is `deployments/alfajores.json`. All docs, tokenlists, and automation must reference it for addresses and metadata.
