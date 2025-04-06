import { WagmiProvider, createConfig, http } from "wagmi";
import { optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injected } from "wagmi/connectors";
import { rpcUrls } from "../config";

// Create wagmi config
const config = createConfig({
  chains: [optimism],
  transports: {
    [optimism.id]: http(rpcUrls[optimism.id]),
  },
  connectors: [
    injected(),
  ],
});

// Create react-query client (required for Wagmi v2)
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;