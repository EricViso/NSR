// src/config/index.ts
import { optimism } from 'wagmi/chains';

// Basic configuration
export const network = "optimism";
export const defaultChain = optimism;

// Set up Wagmi config
export const rpcUrls = {
  [optimism.id]: "https://mainnet.optimism.io",
};