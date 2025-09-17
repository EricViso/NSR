'use client';

import React from 'react';
import Hero from './components/Hero';
import { Paywall } from "@unlock-protocol/paywall";
import networks from '@unlock-protocol/networks';
import { LOCK, NETWORK } from "../lib/constants";

export default function Home() {
  const handlePurchase = async () => {
    try {
      const paywall = new Paywall(networks);

      // Connect to provider if available
      if (typeof window !== 'undefined' && window.ethereum) {
        await paywall.connect(window.ethereum);
      }

      // Open the checkout modal
      paywall.loadCheckoutModal({
        locks: {
          [LOCK]: {
            network: NETWORK,
          }
        },
        pessimistic: true,
        redirectUri: `${window.location.origin}/reader`,
      });
    } catch (error) {
      console.error("Error opening checkout:", error);
      alert("There was an error opening the checkout. Please try again.");
    }
  };

  const handlePreview = () => {
    // Navigate to book preview page
    window.location.href = '/book';
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onPurchaseClick={handlePurchase} onPreviewClick={handlePreview} />
    </div>
  );
}

