// Lock contract addresses - will be updated with actual addresses
export const BOOKLET_LOCK = "0x69e70da81fa7eefcb70d9619574584e2efdf0f88"; // $5 Booklet
export const BOOK_LOCK = "0x69e70da81fa7eefcb70d9619574584e2efdf0f88"; // $500 Full Book - UPDATE THIS
export const NETWORK = 10; // Optimism network ID

// Pricing
export const BOOKLET_PRICE = 5;
export const BOOK_PRICE = 500;

// Unlock Protocol Checkout URLs
export const BOOKLET_CHECKOUT_URL = "https://app.unlock-protocol.com/checkout?id=bd7ee9c3-e8cc-4ba3-9029-efae7d452ec1"; // $5 Booklet
export const BOOK_CHECKOUT_URL = "https://app.unlock-protocol.com/checkout?id=77fa2809-f2d6-4362-a93b-7e09bd665f33"; // $500 Complete Guide

export const paywallConfig = {
    locks: {
      [BOOKLET_LOCK]: {
        network: NETWORK,
      },
      [BOOK_LOCK]: {
        network: NETWORK,
      },
    },
    skipRecipient: true,
    title: "Network Societies Guide",
    pessimistic: true,
  };