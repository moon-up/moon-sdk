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
];
