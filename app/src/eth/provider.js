/* eslint-disable no-unused-vars */
import { ethers } from "ethers";

// const CLOUDFLARE_ENDPOINT = "https://mumbai.prylabs.net";
const MAIN_ENDPOINT =
  "https://polygon-mumbai.g.alchemy.com/v2/evwqwDEDhIXnLnbgTzbtEtev5ZmSwph3";
// const ALTERNATE_ENDPOINT = "https://rpc.slock.it/mumbai";
// const UNSECURE_ENDPOINT = "http://mumbai.blockscout.com";
// const QUICKNODE_ENDPOINT = process.env.REACT_APP_QUICKNODE_URL;

export function createProvider() {
  return new ethers.providers.JsonRpcProvider(MAIN_ENDPOINT, 80001);
}
