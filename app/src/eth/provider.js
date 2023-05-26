/* eslint-disable no-unused-vars */
import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

// const CLOUDFLARE_ENDPOINT = "https://sepolia.prylabs.net";
const MAIN_ENDPOINT = `https://eth-sepolia.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API_KEY_FOR_SEPOLIA}`;
// const ALTERNATE_ENDPOINT = "https://rpc.slock.it/sepolia";
// const UNSECURE_ENDPOINT = "http://sepolia.blockscout.com";
// const QUICKNODE_ENDPOINT = process.env.REACT_APP_QUICKNODE_URL;

export function createProvider() {
  return new ethers.providers.JsonRpcProvider(MAIN_ENDPOINT, 11155111);
}
