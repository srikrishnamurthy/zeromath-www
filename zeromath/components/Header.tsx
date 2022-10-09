import Link from 'next/link'
import React from 'react'
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton, getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto font-rsfmedium">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="px-2 w-64 object-contain cursor-pointer" src="/zeromath-logo-transparent.png" alt=""/>
            </Link>

            {/* <div className="hidden md:inline-flex items-center space-x-5">
              <h3>about</h3>
              <h3>contact</h3>
              <h3 className="text-white bg-fuchsia-500 px-4 py-1 rounded-full">follow</h3>
            </div> */}

        </div>

        <div className="flex items-center space-x-5 text-fuchsia-500">
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={darkTheme({accentColor: '#D946EF', accentColorForeground: 'white', borderRadius: 'medium'})}>
              <ConnectButton />
            </RainbowKitProvider>
          </WagmiConfig>

          {/* <h3>Sign In</h3>
          <h3 className="border px-4 py-1 rounded-full border-fuchsia-500">Get Started</h3> */}
        </div>
    </header>
  )
}

export default Header