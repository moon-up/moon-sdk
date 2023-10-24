export interface Chain {
	chainId: string;
	chainName: string;
	nativeCurrency: {
		name: string;
		symbol: string;
		decimals: number;
	};
	rpcUrls: string[];
	blockExplorerUrls: string[];
}

export const MOON_SUPPORTED_NETWORKS: Chain[] = [
	{
		chainId: '0x1',
		chainName: 'Ethereum',
		nativeCurrency: {
			name: 'Ether',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://eth.llamarpc.com'],
		blockExplorerUrls: ['https://etherscan.io/'],
	},
	{
		chainId: '0x89',
		chainName: 'Polygon',
		nativeCurrency: {
			name: 'Matic',
			symbol: 'MATIC',
			decimals: 18,
		},
		rpcUrls: ['https://polygon-rpc.com/'],
		blockExplorerUrls: ['https://polygonscan.com/'],
	},

	{
		chainId: '0x38',
		chainName: 'Binance Smart Chain',
		nativeCurrency: {
			name: 'BNB',
			symbol: 'BNB',
			decimals: 18,
		},
		rpcUrls: ['https://bsc-dataseed.binance.org/'],
		blockExplorerUrls: ['https://bscscan.com/'],
	},
	{
		chainId: '0xa86a',
		chainName: 'Avalanche',
		nativeCurrency: {
			name: 'AVAX',
			symbol: 'AVAX',
			decimals: 18,
		},
		rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
		blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
	},

	{
		chainId: '0xfa',
		chainName: 'Fantom',
		nativeCurrency: {
			name: 'FTM',
			symbol: 'FTM',
			decimals: 18,
		},
		rpcUrls: ['https://rpc.ftm.tools'],
		blockExplorerUrls: ['https://ftmscan.com/'],
	},
	{
		chainId: '0xa',
		chainName: 'Optimism',
		nativeCurrency: {
			name: 'Optimism',
			symbol: 'OP',
			decimals: 18,
		},
		rpcUrls: ['https://mainnet.optimism.io/'],
		blockExplorerUrls: ['https://optimistic.etherscan.io/'],
	},
	// arbitrum
	{
		chainId: '0xa4b1',
		chainName: 'Arbitrum',
		nativeCurrency: {
			name: 'Arbitrum',
			symbol: 'ARB',
			decimals: 18,
		},
		rpcUrls: ['https://arb1.arbitrum.io/rpc'],
		blockExplorerUrls: ['https://arbiscan.io/'],
	},
	// celo
	{
		chainId: '0xa4ec',
		chainName: 'Celo',
		nativeCurrency: {
			name: 'Celo',
			symbol: 'CELO',
			decimals: 18,
		},
		rpcUrls: ['https://forno.celo.org'],
		blockExplorerUrls: ['https://explorer.celo.org/'],
	},

	// skale
	{
		chainId: '0x50877ed6',
		chainName: 'SKALE',
		nativeCurrency: {
			name: 'SKALE',
			symbol: 'SKALE',
			decimals: 18,
		},
		rpcUrls: [
			'https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix',
		],
		blockExplorerUrls: [
			'https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com',
		],
	},
];
