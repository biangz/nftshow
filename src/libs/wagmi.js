import { createWeb3Modal } from '@web3modal/wagmi/vue'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'

import { configureChains, createConfig } from '@wagmi/core'
import { mainnet } from 'viem/chains'
import { publicProvider } from '@wagmi/core/providers/public'
import { InjectedConnector } from '@wagmi/core'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'

// 1. Define constants
const projectId = '0a3bd06ad2697a71e4662e217f1a4189'

// 2. Configure wagmi client
const { chains, publicClient } = configureChains(
    [mainnet],
    [walletConnectProvider({ projectId }), publicProvider()]
)

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
        new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
        new EIP6963Connector({ chains }),
        new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    ],
    publicClient
})

// 3. Create modal
createWeb3Modal({ 
    wagmiConfig, 
    projectId, 
    chains,
    themeMode: 'dark',
    themeVariables: {
        '--w3m-font-size-master': 12,
        '--w3m-accent': '#66F132',
    }
})