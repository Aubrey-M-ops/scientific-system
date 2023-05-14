/*
 * @Author: wangmanna
 * @Date: 2023-01-16 18:31:40
 * @LastEditors: wangmanna
 * @LastEditTime: 2023-01-16 18:43:13
 * @FilePath: \soilDatad:\Workspace\丝绸之路\silkRoad\src\did\soilData.js
 * @Description: 
 */
import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from './soilData.did.js';
export { idlFactory } from './soilData.did.js';
// CANISTER_ID is replaced by webpack based on node environment
export const canisterId = 'glhjz-5iaaa-aaaan-qcyna-cai';

/**
 * @deprecated since dfx 0.11.1
 * Do not import from `.dfx`, instead switch to using `dfx generate` to generate your JS interface.
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./soilData.did.js")._SERVICE>}
 */
export const createActor = (canisterId, options) => {
  console.warn(`Deprecation warning: you are currently importing code from .dfx. Going forward, refactor to use the dfx generate command for JavaScript bindings.
  
See https://internetcomputer.org/docs/current/developer-docs/updates/release-notes/ for migration instructions`);
  const agent = new HttpAgent();
  
  // Fetch root key for certificate validation during development
  if (process.env.NODE_ENV !== "production") {
    agent.fetchRootKey().catch(err => {
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId
  });
};
  
/**
 * A ready-to-use agent for the soilData canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./soilData.did.js")._SERVICE>}
 */
export const soilData = createActor(canisterId);
