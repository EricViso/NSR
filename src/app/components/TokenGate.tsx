'use client';

import { useAccount, useConnect, useReadContract } from "wagmi";
import { injected } from "wagmi/connectors";
import { type ReactNode, useState, useEffect } from "react";
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { BOOKLET_LOCK, BOOK_LOCK, NETWORK, BOOKLET_CHECKOUT_URL, BOOK_CHECKOUT_URL } from "../../lib/constants";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type TokenGateProps = {
  children: ReactNode | ((props: { tier: 'booklet' | 'book' }) => ReactNode);
  tier?: 'booklet' | 'book';
}

export default function TokenGate({ children, tier = 'booklet' }: TokenGateProps) {
  const { isConnected, address } = useAccount();
  const [mounted, setMounted] = useState(false);

  // Only show content after component has mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check booklet membership
  const { data: hasBooklet, isError: bookletError, isPending: bookletPending } = useReadContract({
    address: BOOKLET_LOCK as `0x${string}`,
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

  // Check book membership
  const { data: hasBook, isError: bookError, isPending: bookPending } = useReadContract({
    address: BOOK_LOCK as `0x${string}`,
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

  const isMember = hasBooklet || hasBook;
  const isError = bookletError || bookError;
  const isPending = bookletPending || bookPending;

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
  // Determine which tier the user has
  const userTier: 'booklet' | 'book' = hasBook ? 'book' : 'booklet';

  // If children is a function, call it with tier info
  if (typeof children === 'function') {
    return <>{children({ tier: userTier })}</>;
  }

  // Otherwise just render children
  return <>{children}</>;
}

/**
 * Connect subcomponent
 */
function Connect() {
  const { connect, isPending } = useConnect();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">Members Only</CardTitle>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <CardDescription className="text-muted-foreground">
            To access the Alternative Communities Guide, you need to connect your wallet and verify membership.
          </CardDescription>
          <p className="text-xs text-muted-foreground mt-4">
            Recommended: MetaMask or any EIP-1193 compatible wallet
          </p>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => connect({ connector: injected() })}
            className="w-full font-bold"
            size="lg"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-current mr-2"></div>
                Connecting...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8 1 1 0 112-0A6 6 0 1110 4a1 1 0 110 2 4 4 0 100 8 1 1 0 110-2 6 6 0 010-12 8 8 0 00-8 8z" clipRule="evenodd" />
                </svg>
                Connect Wallet
              </>
            )}
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
  const handlePurchase = (checkoutUrl: string) => {
    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Choose Your Guide</h1>
          <p className="text-muted-foreground">Select the option that best fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Booklet Option */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">Quick Start Booklet</CardTitle>
              <div className="text-4xl font-bold text-accent my-4">$5</div>
              <CardDescription className="text-muted-foreground">
                Essential frameworks and key concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Core frameworks overview</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Quick implementation guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Key case studies</span>
                </li>
              </ul>

              <Button
                onClick={() => handlePurchase(BOOKLET_CHECKOUT_URL)}
                className="w-full font-bold"
                size="lg"
              >
                Get Booklet
              </Button>
            </CardContent>
          </Card>

          {/* Full Book Option */}
          <Card className="hover:shadow-lg transition-shadow border-accent border-2">
            <CardHeader className="text-center">
              <div className="text-xs font-semibold text-accent uppercase mb-2">Most Comprehensive</div>
              <CardTitle className="text-2xl font-bold text-foreground">Complete Guide</CardTitle>
              <div className="text-4xl font-bold text-accent my-4">$500</div>
              <CardDescription className="text-muted-foreground">
                In-depth research and comprehensive analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Everything in the booklet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Detailed case studies & research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Advanced implementation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Comprehensive reference material</span>
                </li>
              </ul>

              <Button
                onClick={() => handlePurchase(BOOK_CHECKOUT_URL)}
                className="w-full font-bold"
                size="lg"
                variant="default"
              >
                Get Complete Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}