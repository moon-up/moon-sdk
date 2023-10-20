import { MoonProviderOptions } from '@moonup/ethers/src/types';
import { MoonConnector } from '@moonup/wagmi-connector/src/index';
import { Chain, Wallet } from '@rainbow-me/rainbowkit';

export interface MyWalletOptions {
	chains: Chain[];
	options: MoonProviderOptions;
}

export const moonWallet = ({ chains, options }: MyWalletOptions): Wallet => ({
	id: 'moon',
	name: 'Moon',
	iconUrl: '',
	iconBackground: '#fff',
	downloadUrls: {
		browserExtension: 'https://usemoon.ai',
	},
	createConnector: () => {
		const connector = new MoonConnector({
			chains,
			options,
		});

		return {
			connector,
			mobile: {
				getUri: async () => {
					try {
						await connector.connect();
					} catch (e) {
						console.error('Failed to connect');
					}
					return '';
				},
			},
			desktop: {
				getUri: async () => {
					try {
						await connector.connect();
					} catch (e) {
						console.error('Failed to connect');
					}
					return '';
				},
			},
		};
	},
});
