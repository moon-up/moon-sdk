import type { ReactNode } from "react";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { WagmiProvider, createConfig } from "wagmi";

import {
	coinbaseWallet,
	injected,
	metaMask,
	safe,
	walletConnect,
} from "@wagmi/connectors";
import { http } from "@wagmi/core";
import {
	arbitrum,
	arbitrumGoerli,
	arbitrumNova,
	arbitrumSepolia,
	aurora,
	auroraTestnet,
	avalanche,
	avalancheFuji,
	base,
	baseGoerli,
	baseSepolia,
	bsc,
	bscTestnet,
	celo,
	celoAlfajores,
	classic,
	cronos,
	crossbell,
	evmos,
	evmosTestnet,
	fantom,
	fantomTestnet,
	filecoin,
	filecoinCalibration,
	filecoinHyperspace,
	gnosis,
	gnosisChiado,
	goerli,
	harmonyOne,
	holesky,
	localhost,
	mainnet,
	metis,
	metisGoerli,
	moonbaseAlpha,
	moonbeam,
	moonriver,
	okc,
	optimism,
	optimismGoerli,
	optimismSepolia,
	polygon,
	polygonMumbai,
	polygonZkEvm,
	polygonZkEvmTestnet,
	pulsechain,
	pulsechainV4,
	rollux,
	ronin,
	scroll,
	scrollSepolia,
	sepolia,
	skaleBlockBrawlers,
	skaleCalypso,
	skaleCalypsoTestnet,
	skaleCryptoBlades,
	skaleCryptoColosseum,
	skaleEuropa,
	skaleEuropaTestnet,
	skaleExorde,
	skaleHumanProtocol,
	skaleNebula,
	skaleNebulaTestnet,
	skaleRazor,
	skaleTitan,
	skaleTitanTestnet,
	songbird,
	syscoin,
	taraxa,
	telos,
	telosTestnet,
	thunderTestnet,
	wanchain,
	wanchainTestnet,
	zhejiang,
	zkSync,
	zora,
	zoraTestnet,
} from "wagmi/chains";
import type { Config } from "wagmi";

export const config: Config = createConfig({
	ssr: true,
	connectors: [
		injected(),
		metaMask(),
		walletConnect({
			projectId: "822f4b6ba46adcf4ed01d5e24e68cc88",
		}),
		safe(),
		coinbaseWallet(),
	],
	chains: [
		mainnet,
		sepolia,
		goerli,
		arbitrum,
		arbitrumGoerli,
		arbitrumNova,
		arbitrumSepolia,
		aurora,
		auroraTestnet,
		avalanche,
		avalancheFuji,
		base,
		baseGoerli,
		baseSepolia,
		bsc,
		bscTestnet,
		celo,
		celoAlfajores,
		classic,
		cronos,
		crossbell,
		evmos,
		evmosTestnet,
		fantom,
		fantomTestnet,
		filecoin,
		filecoinCalibration,
		filecoinHyperspace,
		gnosis,
		gnosisChiado,
		harmonyOne,
		holesky,
		localhost,
		metis,
		metisGoerli,
		moonbeam,
		moonbaseAlpha,
		moonriver,
		okc,
		optimism,
		optimismGoerli,
		optimismSepolia,
		polygon,
		polygonMumbai,
		polygonZkEvm,
		polygonZkEvmTestnet,
		pulsechain,
		pulsechainV4,
		rollux,
		ronin,
		scroll,
		scrollSepolia,
		skaleBlockBrawlers,
		skaleCalypso,
		skaleCalypsoTestnet,
		skaleCryptoBlades,
		skaleCryptoColosseum,
		skaleEuropa,
		skaleEuropaTestnet,
		skaleExorde,
		skaleHumanProtocol,
		skaleNebula,
		skaleNebulaTestnet,
		skaleRazor,
		skaleTitan,
		skaleTitanTestnet,
		songbird,
		syscoin,
		taraxa,
		telos,
		telosTestnet,
		thunderTestnet,
		wanchain,
		wanchainTestnet,
		zhejiang,
		zkSync,
		zora,
		zoraTestnet,
	],
	transports: {
		[mainnet.id]: http(),
		[sepolia.id]: http(),
		[goerli.id]: http(),
		[arbitrum.id]: http(),
		[arbitrumGoerli.id]: http(),
		[arbitrumNova.id]: http(),
		[arbitrumSepolia.id]: http(),
		[aurora.id]: http(),
		[auroraTestnet.id]: http(),
		[avalanche.id]: http(),
		[avalancheFuji.id]: http(),
		[base.id]: http(),
		[baseGoerli.id]: http(),
		[baseSepolia.id]: http(),
		[bsc.id]: http(),
		[bscTestnet.id]: http(),
		[celo.id]: http(),
		[celoAlfajores.id]: http(),
		[classic.id]: http(),
		[cronos.id]: http(),
		[crossbell.id]: http(),
		[evmos.id]: http(),
		[evmosTestnet.id]: http(),
		[fantom.id]: http(),
		[fantomTestnet.id]: http(),
		[filecoin.id]: http(),
		[filecoinCalibration.id]: http(),
		[filecoinHyperspace.id]: http(),
		[gnosis.id]: http(),
		[gnosisChiado.id]: http(),
		[harmonyOne.id]: http(),
		[holesky.id]: http(),
		[localhost.id]: http(),
		[metis.id]: http(),
		[metisGoerli.id]: http(),
		[moonbeam.id]: http(),
		[moonbaseAlpha.id]: http(),
		[moonriver.id]: http(),
		[okc.id]: http(),
		[optimism.id]: http(),
		[optimismGoerli.id]: http(),
		[optimismSepolia.id]: http(),
		[polygon.id]: http(),
		[polygonMumbai.id]: http(),
		[polygonZkEvm.id]: http(),
		[polygonZkEvmTestnet.id]: http(),
		[pulsechain.id]: http(),
		[pulsechainV4.id]: http(),
		[rollux.id]: http(),
		[ronin.id]: http(),
		[scroll.id]: http(),
		[scrollSepolia.id]: http(),
		[skaleBlockBrawlers.id]: http(),
		[skaleCalypso.id]: http(),
		[skaleCalypsoTestnet.id]: http(),
		[skaleCryptoBlades.id]: http(),
		[skaleCryptoColosseum.id]: http(),
		[skaleEuropa.id]: http(),
		[skaleEuropaTestnet.id]: http(),
		[skaleExorde.id]: http(),
		[skaleHumanProtocol.id]: http(),
		[skaleNebula.id]: http(),
		[skaleNebulaTestnet.id]: http(),
		[skaleRazor.id]: http(),
		[skaleTitan.id]: http(),
		[skaleTitanTestnet.id]: http(),
		[songbird.id]: http(),
		[syscoin.id]: http(),
		[taraxa.id]: http(),
		[telos.id]: http(),
		[telosTestnet.id]: http(),
		[thunderTestnet.id]: http(),
		[wanchain.id]: http(),
		[wanchainTestnet.id]: http(),
		[zhejiang.id]: http(),
		[zkSync.id]: http(),
		[zora.id]: http(),
	},
});

type WagmiWrapperProps = {
	children: ReactNode;
};

export const WagmiWrapper: React.FC<WagmiWrapperProps> = ({ children }) => {
	// const [queryClient] = React.useState(() => new QueryClient());

	React.useEffect(() => {
		setTimeout(() => {});
	}, []);

	return <WagmiProvider config={config}>{children}</WagmiProvider>;
};
