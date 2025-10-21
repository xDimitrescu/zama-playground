import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const TESTNET_RPC_URL = process.env.TESTNET_RPC_URL || "https://devnet.zama.ai";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    zamaDevnet: {
      url: TESTNET_RPC_URL,
      chainId: 9000,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};

export default config;  
