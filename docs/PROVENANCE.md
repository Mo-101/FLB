# Provenance — Supply & Actions

## Supply Invariant

- `totalSupply()` at genesis == **0**.
- Every increase traces back to `FlameBornEngine` executing a governance-approved mint.

## Evidence Trail

- Engine emits `MintedByEngine(to, amount, proofRef)` for every mint.
- `proofRef` links to IPFS/Arweave hashes or on-chain identifiers documenting the verified action.

## Reconciliation

- Nightly process:
  1. Pull `Transfer` and `MintedByEngine` logs.
  2. Match against the off-chain action ledger.
  3. Publish CSV/JSON snapshots to `docs/provenance/`.

## Incident Addendum

- Any SEV-1 mint anomaly triggers a dedicated appendix entry describing root cause, impact, and remediation timeline.
