# Zama FHEVM Starter – Hello FHEVM Tutorial

A developer-onboarding tutorial and reference starter built around Zama’s FHEVM (Fully Homomorphic Encryption Virtual Machine). This project demonstrates a practical Hardhat setup, CI/CD, secure configuration, and a simple smart contract workflow that simulates encrypted state handling.

## Overview

This repository is based on the `fhevm-starter-hardhat` template and is linked to Zama’s public FHEVM ecosystem for visibility and contribution validation. It is designed for fast onboarding and submission to the Zama Bounty Track – Season 10.

### Key Contributions
- Repository scaffolding with Hardhat + TypeScript + Prettier + ESLint + CI.
- CI improvements: environment variable checks, lint/typecheck stabilization, deploy pipeline hardening.
- Security practices: GitHub Secrets for `PRIVATE_KEY` and `TESTNET_RPC_URL`, RPC connectivity validation.
- “Hello FHEVM” tutorial: contract, scripts, tests, and reproducible environment.
- Documentation for dev environment, network setup, and integration notes with Zama’s FHEVM.

## Features
- Hardhat project configured with TypeScript, Prettier, and ESLint.
- GitHub Actions CI with lint, typecheck, build, test, and basic deploy flow.
- Zama Devnet integration (`chainId: 9000`, symbol `ZAMA`, RPC `https://devnet.zama.ai`).
- Example contract `EncryptedHello.sol` showing mock encrypted variable handling.
- Scripts for deploy and interaction, plus example tests.

## Prerequisites
- Node.js 18+ and `npm` or `pnpm`.
- Git and a GitHub account (for CI + secrets).
- MetaMask (for Devnet account management).

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```
2. Copy environment example and fill values:
   ```bash
   cp .env.example .env
   ```
   Required variables:
   - `PRIVATE_KEY` – Your dev account private key (never commit this).
   - `TESTNET_RPC_URL` – Zama Devnet RPC, typically `https://devnet.zama.ai`.

3. Configure the Hardhat network (excerpt from `hardhat.config.ts`):
   ```ts
   import * as dotenv from 'dotenv';
   dotenv.config();

   const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
   const TESTNET_RPC_URL = process.env.TESTNET_RPC_URL || 'https://devnet.zama.ai';

   module.exports = {
     solidity: '0.8.20',
     networks: {
       zamaDevnet: {
         url: TESTNET_RPC_URL,
         chainId: 9000,
         accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
       },
     },
   };
   ```

4. Add Zama Devnet to MetaMask:
   - Network name: `Zama Devnet`
   - New RPC URL: `https://devnet.zama.ai`
   - Chain ID: `9000`
   - Currency symbol: `ZAMA`

## Contracts
- `contracts/EncryptedHello.sol` – Demonstrates a basic pattern for storing and reading a mock encrypted variable. In production, use Zama’s official libraries and patterns for true FHE operations.

## Scripts
- `scripts/deploy.ts` – Deploys `EncryptedHello.sol` to Zama Devnet.
- `scripts/interact.ts` – Reads/writes the contract state and logs results.

Run scripts with Hardhat:
```bash
npx hardhat run scripts/deploy.ts --network zamaDevnet
npx hardhat run scripts/interact.ts --network zamaDevnet
```

## Testing
- Example tests: `test/EncryptedHello.spec.ts`.
- Run tests:
```bash
npm run test
# or
pnpm test
```

## CI/CD
- GitHub Actions workflow includes:
  - Environment variable checks for `PRIVATE_KEY` and `TESTNET_RPC_URL`.
  - Linting (`eslint`), formatting (`prettier`), and typechecking (`tsc`).
  - Build and test stages.
  - Optional deploy step gated by branch and secret presence.
- Store secrets in GitHub: `Settings` → `Secrets and variables` → `Actions`.

## Security Notes
- Do not commit real private keys. Use `.env` and GitHub Secrets.
- Validate RPC connectivity before deployments.
- Review CI logs for any failed checks and fix promptly.

## Folder Structure (typical)
```
├── contracts/
│   └── EncryptedHello.sol
├── scripts/
│   ├── deploy.ts
│   └── interact.ts
├── test/
│   └── EncryptedHello.spec.ts
├── hardhat.config.ts
├── package.json
├── tsconfig.json
├── .eslintrc.cjs
├── .prettierrc
├── .env.example
└── README.md
```

## Notes
- This tutorial is educational and uses a mock approach for encrypted variables. For production-grade FHE usage, consult Zama’s official FHEVM documentation and libraries.
- The repository is prepared for onboarding and validation in the Zama ecosystem and the Bounty Track – Season 10.

## License
MIT (or the license used by your organization).