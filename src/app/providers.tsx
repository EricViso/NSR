'use client';

import { WagmiProvider, createConfig, http } from "wagmi";
import { optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injected } from "wagmi/connectors";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

// Create config outside component to avoid recreation on renders
const config = createConfig({
  chains: [optimism],
  transports: {
    [optimism.id]: http("https://mainnet.optimism.io"),
  },
  connectors: [
    injected(),
  ],
});

// Create client outside to avoid recreation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  // Only render children after mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="eric-miki-theme"
        >
          {mounted ? children : null}
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}