'use client';

import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { LOCK, NETWORK } from "../../lib/constants";
import TopBar from '../components/TopBar';
import PDFChrome from '../components/PDFChrome';
import WatermarkOverlay from '../components/WatermarkOverlay';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function ReaderPage() {
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

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
      <div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brand-accent)]"></div>
      </div>
    );
  }

  // If not connected or no membership, redirect to purchase
  if (!isConnected || !isMember || isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)]">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-[var(--brand-navy)]">Access Required</h2>
          <p className="text-[var(--brand-muted)] mb-6">
            You need to own the book NFT to access the PDF reader.
          </p>
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Go to Purchase Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--brand-bg)]">
      <TopBar title="Network Societies Playbook" />

      {/* Welcome Banner for NFT Holders */}
      <div className="bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-navy)] text-white py-3 px-4 text-center">
        <p className="text-sm">
          🎉 Welcome! You have access to the full Network Societies Playbook as an NFT holder.
        </p>
      </div>

      <div className="pt-16"> {/* Account for fixed top bar */}
        <PDFChrome>
          {/* Enhanced PDF viewer placeholder */}
          <div className="bg-white min-h-[800px] flex flex-col">
            {/* PDF Toolbar */}
            <div className="border-b border-gray-200 p-4 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[var(--brand-navy)]">
                  Network Societies Playbook
                </span>
                <span className="text-xs text-[var(--brand-muted)]">
                  Page 1 of 127
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Zoom In
                </button>
                <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Zoom Out
                </button>
                <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Download
                </button>
              </div>
            </div>

            {/* PDF Content Area */}
            <div className="flex-1 p-8 bg-gray-100 flex items-center justify-center">
              <div className="max-w-2xl bg-white shadow-lg rounded-lg p-12 text-center">
                <div className="w-16 h-16 bg-[var(--brand-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-[var(--brand-navy)] mb-4">
                  PDF Reader Ready
                </h2>

                <p className="text-[var(--brand-muted)] mb-6 leading-relaxed">
                  Your PDF viewer will be integrated here. This placeholder shows the protected reader interface
                  that only NFT holders can access.
                </p>

                <div className="bg-[var(--brand-cream)] rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-[var(--brand-navy)] mb-2">Integration Notes:</h3>
                  <ul className="text-sm text-[var(--brand-muted)] space-y-1 text-left">
                    <li>• Replace this with react-pdf, pdf-lib, or your preferred PDF viewer</li>
                    <li>• PDF should be served from a secure, authenticated endpoint</li>
                    <li>• Consider adding annotation and bookmark features</li>
                    <li>• Implement download restrictions if needed</li>
                  </ul>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-[var(--brand-muted)]">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Protected Access Verified</span>
                </div>
              </div>
            </div>
          </div>
        </PDFChrome>
      </div>

      {/* Watermark overlay */}
      <WatermarkOverlay address={address} />

      {/* Access note */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-xs">
        <p className="text-xs text-[var(--brand-muted)]">
          Access is personal; please don&apos;t share.
        </p>
      </div>
    </div>
  );
}