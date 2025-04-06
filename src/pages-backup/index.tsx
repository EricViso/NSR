import { useAccount, useConnect, useReadContract } from "wagmi"
import { injected } from "wagmi/connectors"
import { PublicLockV13 } from "@unlock-protocol/contracts"
import { LOCK, NETWORK } from "../lib/constants"
import { Paywall } from "@unlock-protocol/paywall"
import networks from '@unlock-protocol/networks'
import { type ReactNode } from "react"

type TokenGateProps = {
  children: ReactNode;
}

export const TokenGate = ({ children }: TokenGateProps) => {
  const { isConnected, address, connector } = useAccount()

  const { data: isMember, isError, isPending } = useReadContract({
    address: LOCK as `0x${string}`,
    abi: PublicLockV13.abi,
    functionName: 'balanceOf',
    chainId: NETWORK,
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
    select: (data) => {
      // In ethers v6, we can just check if data > 0
      return BigInt(data?.toString() || '0') > BigInt(0)
    }
  })

  if (isPending) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>There was an error checking your membership status. Please reload the page!</div>
  }

  // User not connected
  if (!isConnected)  {
    return <Connect />
  }

  // User does not have membership
  if (!isMember) {
    return <Checkout />
  }

  // All good: user is connected and they have a membership!
  return <>{children}</>
}

/**
 * Connect subcomponent!
 */
const Connect = () => {
  const { connect } = useConnect()
  
  return <section>
    <p className="mb-4">To view this post you need to be a member!</p>
    <button 
      onClick={() => connect({ connector: injected() })} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign-In
    </button>
  </section>
}

/**
 * Checkout subcomponent!
 */
const Checkout = () => {
  const { connector } = useAccount()
  
  const checkout = async () => {
    const paywall = new Paywall(networks)
    
    // This needs updating based on your connector's API
    if (connector && connector.getProvider) {
      const provider = await connector.getProvider()
      paywall.connect(provider)
      paywall.loadCheckoutModal({
        locks: {
          [LOCK]: {
            network: NETWORK,
          }
        },
        pessimistic: true,
      })
    }
  }

  return (
    <section>
      <p className="mb-4">You currently don't have a membership... </p>
      <button 
        onClick={() => checkout()} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Purchase one now!
      </button>
    </section>
  )
}

// Default export for the page
export default function HomePage() {
  return (
    <TokenGate>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Member-Only Content</h1>
        <p>This content is only visible to token holders.</p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Welcome, Member!</h2>
          <p>You now have access to exclusive content.</p>
        </div>
      </div>
    </TokenGate>
  )
}