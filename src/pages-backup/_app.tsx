// This is a backup file, not used in production
import { WagmiConfig, createClient } from 'wagmi';
import { ethers } from 'ethers';
import { network } from '../config';
import { ReactNode } from 'react';

type AppProps = {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
};

const client = createClient({
  autoConnect: true,
  provider: new ethers.providers.JsonRpcProvider(
    `https://mainnet.optimism.io`,
    'optimism'
  ),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default App;
