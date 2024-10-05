import { defineChain } from '../../utils/chain/defineChain.js'

export const bitTorrentDonau = /*#__PURE__*/ defineChain({
  id: 1029,
  name: 'BitTorrent Chain Donau',
  network: 'bittorrent-chain-donau',
  nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://pre-rpc.bt.io'] },
  },
  blockExplorers: {
    default: {
      name: 'Bttcscan',
      url: 'https://testnet.bttcscan.com',
      apiUrl: 'https://testnet-api.bttcscan.com/',
    },
  },
  testnet: true,
})
