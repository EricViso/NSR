'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ClientOnly from '../components/ClientOnly';

// Use no-SSR for both TokenGate and SimplePDFViewer to avoid hydration issues
const TokenGate = dynamic(
  () => import('../components/TokenGate'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }
);

const SimplePDFViewer = dynamic(
  () => import('../components/SimplePDFViewer'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading PDF Reader...</p>
        </div>
      </div>
    )
  }
);

export default function ReaderPage() {

  return (
    <ClientOnly
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      }
    >
      <TokenGate>
        <SimplePDFViewer pdfUrl="/PDF/NSR_sample.pdf" />
      </TokenGate>
    </ClientOnly>
  );
}