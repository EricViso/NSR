'use client';

import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { LOCK, NETWORK } from "../../lib/constants";
import TopBar from '../components/TopBar';
import PDFChrome from '../components/PDFChrome';
import PDFViewer from '../components/PDFViewer';
import WatermarkOverlay from '../components/WatermarkOverlay';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ReaderPage() {
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  
  // PDF URL - Using a sample PDF for testing
  // In production, this should be served from a secure, authenticated endpoint
  const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

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
  });

  // Process the membership data
  const hasMembership = isMember && BigInt(isMember.toString()) > BigInt(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  if (!mounted || (isConnected && isPending)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not connected or no membership, redirect to purchase
  if (!isConnected || !hasMembership || isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Access Required</h2>
            <p className="text-muted-foreground mb-6">
              You need to own the book NFT to access the PDF reader.
            </p>
            <Button asChild>
              <Link href="/buy-book">
                Go to Purchase Page
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar title="Alternative Communities Guide" />

      {/* Welcome Banner for NFT Holders */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-4 text-center">
        <p className="text-sm">
          🎉 Welcome! You have access to the full Alternative Communities Guide as an NFT holder.
        </p>
      </div>

      <div className="pt-16"> {/* Account for fixed top bar */}
        <PDFChrome>
          <PDFViewer pdfUrl={pdfUrl} address={address} />
        </PDFChrome>
      </div>

      {/* Watermark overlay */}
      <WatermarkOverlay address={address} />

      {/* Access note */}
      <div className="fixed bottom-4 right-4 bg-card rounded-lg shadow-lg p-3 border max-w-xs">
        <p className="text-xs text-muted-foreground">
          Access is personal; please don&apos;t share.
        </p>
      </div>
    </div>
  );
}