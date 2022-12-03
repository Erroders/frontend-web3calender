import type { AppProps } from "next/app";
import "../styles/globals.css";

import {
  connectorsForWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
  argentWallet,
  braveWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const GnosisChain = {
  id: 100,
  name: "Gnosis Chain",
  network: "Gnosis",
  nativeCurrency: {
    decimals: 18,
    name: "xDai",
    symbol: "xDai",
  },
  rpcUrls: {
    default: "https://rpc.ankr.com/gnosis",
  },
  blockExplorers: {
    default: { name: "Gnosis Scan", url: "https://gnosisscan.io/" },
  },
  iconUrls: [
    "https://images.prismic.io/koinly-marketing/16d1deb7-e71f-48a5-9ee7-83eb0f7038e4_Gnosis+Chain+Logo.png",
  ],
  testnet: false,
};

export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [chain.polygonMumbai, chain.goerli, GnosisChain],
    [
      jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/gnosis" }) }),
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID ?? "" }),
      publicProvider(),
    ]
  );

  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        injectedWallet({ chains }),
        metaMaskWallet({ chains }),
        rainbowWallet({ chains }),
        walletConnectWallet({ chains }),
      ],
    },
    {
      groupName: "Others",
      wallets: [
        trustWallet({ chains }),
        ledgerWallet({ chains }),
        braveWallet({ chains }),
        coinbaseWallet({ chains, appName: "" }),
        argentWallet({ chains }),
        omniWallet({ chains }),
        imTokenWallet({ chains }),
      ],
    },
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        initialChain={chain.polygonMumbai}
        modalSize="compact"
        coolMode={true}
        theme={lightTheme()}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
