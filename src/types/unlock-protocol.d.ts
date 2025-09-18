declare module '@unlock-protocol/contracts' {
  export const PublicLockV13: {
    abi: readonly unknown[];
  };
}

declare module '@unlock-protocol/paywall' {
  export class Paywall {
    constructor(networks: Record<string, unknown>);
    connect: (provider: unknown) => void;
    loadCheckoutModal: (config: Record<string, unknown>) => void;
  }
}

declare module '@unlock-protocol/networks' {
  const networks: Record<string, unknown>;
  export default networks;
}