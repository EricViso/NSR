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
  const { isConnected, address, connector } = useAccount();
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
    return <div className="min-h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  // Show error if there was a problem checking membership
  if (isError) {
    return <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Error</h2>
      <p className="mb-4 dark:text-gray-300">There was an error checking your membership status. Please reload the page!</p>
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
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Members Only</h2>
      <p className="mb-4 dark:text-gray-300">To view this content you need to be a member!</p>
      <button 
        onClick={() => connect({ connector: injected() })} 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Connect Wallet
      </button>
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
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Membership Required</h2>
      <p className="mb-4 dark:text-gray-300">You currently don't have a membership...</p>
      <button 
        onClick={checkout} 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Purchase one now!
      </button>
    </div>
  );
}