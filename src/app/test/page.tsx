'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TestPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Test Page</h1>
      <p className="mb-4">This is a simple test page to verify routing is working.</p>
      <p className="mb-8">Client-side rendering: {isClient ? 'Active' : 'Not active'}</p>
      
      <Button asChild>
        <Link href="/">
          Return to Home
        </Link>
      </Button>
    </div>
  );
}