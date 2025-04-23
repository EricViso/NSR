declare module '@unlock-protocol/contracts' {
  export const PublicLockV13: {
    abi: any[];
  };
}

declare module '@unlock-protocol/paywall' {
  export class Paywall {
    constructor(networks: any);
    connect: (provider: any) => void;
    loadCheckoutModal: (config: any) => void;
  }
}

declare module '@unlock-protocol/networks' {
  const networks: any;
  export default networks;
}