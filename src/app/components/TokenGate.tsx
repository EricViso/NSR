'use client';

import { useAccount, useConnect, useReadContract } from "wagmi";
import { injected } from "wagmi/connectors";
import { type ReactNode, useState, useEffect } from "react";
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { LOCK, NETWORK } from "../../lib/constants";
import { Paywall } from "@unlock-protocol/paywall";
import networks from '@unlock-protocol/networks';

type TokenGateProps = {
  children: ReactNode;
}

export default function TokenGate({ children }: TokenGateProps) {
  const { isConnected, address } = useAccount();
  const [mounted, setMounted] = useState(false);

  // Only show content after component has mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Read contract to check membership
  const { data: isMember, isError, isPending } = useReadContract({
    address: LOCK as `0x${string}`,
    abi: PublicLockV13.abi,
    functionName: 'balanceOf',
    chainId: NETWORK,
    args: address ? [address] : undefined,
    query: {
      enabled: !!mounted && !!address,
    },
    select: (data) => {
      return BigInt(data?.toString() || '0') > BigInt(0);
    }
  });

  // Return loading state on server-side rendering or while contract data is loading
  if (!mounted || (isConnected && isPending)) {
    return <div className="min-h-screen flex justify-center items-center bg-[var(--cream)] dark:bg-[var(--navy)]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--gold)]"></div>
    </div>;
  }

  // Show error if there was a problem checking membership
  if (isError) {
    return <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] dark:bg-[var(--navy)]">
      <div className="max-w-md p-8 bg-white dark:bg-[var(--charcoal)] rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-[var(--navy)] dark:text-[var(--gold)]">Error</h2>
        <p className="mb-6 text-[var(--slate)] dark:text-[var(--cream)]">There was an error checking your membership status. Please reload the page!</p>
        <button onClick={() => window.location.reload()} className="px-6 py-3 bg-[var(--navy)] text-white rounded-md hover:opacity-90 transition duration-200">
          Reload Page
        </button>
      </div>
    </div>;
  }

  // User not connected - show connect button
  if (!isConnected) {
    return <Connect />;
  }

  // User is connected but doesn't have a membership - show checkout
  if (!isMember) {
    return <Checkout />;
  }

  // User is connected and has a membership - show content
  return <>{children}</>;
}

/**
 * Connect subcomponent
 */
function Connect() {
  const { connect } = useConnect();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] dark:bg-[var(--navy)]">
      <div className="max-w-md w-full p-8 bg-white dark:bg-[var(--charcoal)] rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold mb-2 text-[var(--navy)] dark:text-[var(--gold)]">Members Only</h2>
        <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
        
        <p className="mb-8 text-[var(--slate)] dark:text-[var(--cream)]">
          To access the Alternative Communities Report, you need to connect your wallet and verify membership.
        </p>
        
        <button 
          onClick={() => connect({ connector: injected() })} 
          className="w-full px-6 py-4 bg-[var(--navy)] text-white rounded-md hover:opacity-90 transition duration-200 font-bold flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8 1 1 0 112-0A6 6 0 1110 4a1 1 0 110 2 4 4 0 100 8 1 1 0 110-2 6 6 0 010-12 8 8 0 00-8 8z" clipRule="evenodd" />
          </svg>
          Connect Wallet
        </button>
        
        <p className="mt-6 text-sm text-[var(--slate)] dark:text-[var(--cream)]">
          Need a membership? You&apos;ll be able to purchase one after connecting.
        </p>
      </div>
    </div>
  );
}

/**
 * Checkout subcomponent
 */
function Checkout() {
  const { connector } = useAccount();
  
  const checkout = async () => {
    const paywall = new Paywall(networks);
    
    try {
      // Get provider from connector
      if (connector && connector.getProvider) {
        const provider = await connector.getProvider();
        
        // Connect the paywall to the provider
        paywall.connect(provider);
        
        // Open the checkout modal
        paywall.loadCheckoutModal({
          locks: {
            [LOCK]: {
              network: NETWORK,
            }
          },
          pessimistic: true,
        });
      }
    } catch (error) {
      console.error("Error opening checkout:", error);
      alert("There was an error opening the checkout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] dark:bg-[var(--navy)]">
      <div className="max-w-md w-full p-8 bg-white dark:bg-[var(--charcoal)] rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold mb-2 text-[var(--navy)] dark:text-[var(--gold)]">Membership Required</h2>
        <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
        
        <p className="mb-4 text-[var(--slate)] dark:text-[var(--cream)]">
          You&apos;re almost there! You need a membership to access the Alternative Communities Report.
        </p>
        
        <div className="bg-[var(--cream)] dark:bg-[var(--navy)] p-4 rounded-md mb-6">
          <h3 className="font-semibold mb-2 text-[var(--navy)] dark:text-[var(--gold)]">Membership Benefits:</h3>
          <ul className="text-left space-y-1 text-[var(--charcoal)] dark:text-[var(--cream)]">
            <li className="flex items-start">
              <span className="text-[var(--gold)] mr-2">✓</span>
              <span>Exclusive in-depth analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--gold)] mr-2">✓</span>
              <span>Monthly insights reports</span>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--gold)] mr-2">✓</span>
              <span>Community forum access</span>
            </li>
          </ul>
        </div>
        
        <button 
          onClick={checkout} 
          className="w-full px-6 py-4 bg-[var(--gold)] text-[var(--navy)] rounded-md hover:opacity-90 transition duration-200 font-bold flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Purchase Membership
        </button>
      </div>
    </div>
  );
}