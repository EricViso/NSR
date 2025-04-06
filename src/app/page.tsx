'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import ClientOnly from './components/ClientOnly';

// Use no-SSR for the TokenGate to avoid hydration issues
const TokenGate = dynamic(
  () => import('./components/TokenGate'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }
);

export default function Home() {
  return (
    <ClientOnly
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <TokenGate>
          <main className="flex flex-col gap-8 items-center max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold">Welcome to Token Gated Website</h1>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm w-full">
              <h2 className="text-xl font-semibold mb-4">Member-Only Content</h2>
              <p className="mb-4">This content is only visible to token holders.</p>
              
              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium mb-2">Exclusive Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Premium tutorial access</li>
                  <li>Community discussion forum</li>
                  <li>Early access to new features</li>
                  <li>Special member events</li>
                </ul>
              </div>
            </div>
            
            <Image
              className="mt-8 dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </main>
        </TokenGate>
      </div>
    </ClientOnly>
  );
}