'use client';

import { useAccount, useConnect, useReadContract } from "wagmi";
import { injected } from "wagmi/connectors";
import { type ReactNode, useState, useEffect } from "react";
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { LOCK, NETWORK } from "../../lib/constants";
import { Paywall } from "@unlock-protocol/paywall";
import networks from '@unlock-protocol/networks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    return <div className="min-h-screen flex justify-center items-center bg-background">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>;
  }

  // Show error if there was a problem checking membership
  if (isError) {
    return <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">Error</CardTitle>
          <CardDescription className="text-muted-foreground">
            There was an error checking your membership status. Please reload the page!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => window.location.reload()} className="w-full">
            Reload Page
          </Button>
        </CardContent>
      </Card>
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
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">Members Only</CardTitle>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <CardDescription className="text-muted-foreground">
            To access the Alternative Communities Report, you need to connect your wallet and verify membership.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => connect({ connector: injected() })} 
            className="w-full font-bold"
            size="lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8 1 1 0 112-0A6 6 0 1110 4a1 1 0 110 2 4 4 0 100 8 1 1 0 110-2 6 6 0 010-12 8 8 0 00-8 8z" clipRule="evenodd" />
            </svg>
            Connect Wallet
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground text-center">
            Need a membership? You&apos;ll be able to purchase one after connecting.
          </p>
        </CardContent>
      </Card>
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
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">Membership Required</CardTitle>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <CardDescription className="text-muted-foreground">
            You&apos;re almost there! You need a membership to access the Alternative Communities Report.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2 text-foreground">Membership Benefits:</h3>
            <ul className="text-left space-y-1 text-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Exclusive in-depth analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Monthly insights reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Community forum access</span>
              </li>
            </ul>
          </div>
          
          <Button 
            onClick={checkout} 
            className="w-full font-bold"
            size="lg"
            variant="secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Purchase Membership
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}