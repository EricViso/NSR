export const LOCK = "0x69e70da81fa7eefcb70d9619574584e2efdf0f88"; // Your Unlock lock contract address
export const NETWORK = 10; // Optimism network ID

export const paywallConfig = {
    locks: {
      [LOCK]: {
        NETWORK,
      },
    },
    skipRecipient: true,
    title: "My App Membership",
    pessimistic: true,
  };