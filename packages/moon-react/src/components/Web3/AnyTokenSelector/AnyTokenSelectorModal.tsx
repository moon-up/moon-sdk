import { Input, type InputProps, Modal } from "@/components";
import { useLifi, useMoonTokenManager, useOdos } from "@/hooks";
import type { LiFiToken, LiFiTokenMap, OdosTokenMap } from "@/types";
import { combineArraysFromObject } from "@/utils";
import React, { useEffect, useMemo, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

export type AnyTokenSelectorModalProps = {
	initialTokenAddress?: string | undefined;
	initialTokenChain?: string | undefined;
	onSelect: (tokenAddress: string) => void;
	title?: string;
	headerProps?: React.HTMLAttributes<HTMLDivElement>;
	buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	inputProps?: InputProps;
	listProps?: React.HTMLAttributes<HTMLDivElement>;
	listItemProps?: React.HTMLAttributes<HTMLDivElement>;
};

export type AnyToken = {
	address: string;
	chainId: string;
	name: string;
	symbol: string;
	type: "ERC20" | "ETH" | "ERC721" | "ERC1155";
	decimals: number;
	price?: string;
};

export const AnyTokenSelectorModal: React.FC<AnyTokenSelectorModalProps> = ({
	initialTokenAddress,
	initialTokenChain,
	onSelect,
	title,
	headerProps,
	buttonProps,
	inputProps,
	listProps,
	listItemProps,
}) => {
	// const inputChainIdNumber = Number.parseInt(initialTokenChain || "1");
	const { supportedTokensQuery: supportedTokensQueryLifi } = useLifi();
	const { supportedTokensQuery: supportedTokensQueryOdos } = useOdos();
	const { tokensWithGasToken } = useMoonTokenManager();
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const [filteredTokens, setFilteredTokens] = useState([] as AnyToken[]);

	const [selectedTokenAddress, setSelectedTokenAddress] = useState<
		string | undefined
	>(initialTokenAddress);
	const [selectedChainKey, setSelectedChainKey] = useState<string | undefined>(
		initialTokenChain,
	);

	React.useEffect(() => {
		if (selectedChainKey !== initialTokenChain)
			setSelectedChainKey(initialTokenChain);
	}, [initialTokenChain]);

	React.useEffect(() => {
		if (selectedTokenAddress !== initialTokenAddress)
			setSelectedTokenAddress(initialTokenAddress);
	}, [initialTokenAddress]);

	const tokensLoaded = useMemo(() => {
		console.log(
			"AnyToken::tokensLoaded",
			supportedTokensQueryLifi,
			supportedTokensQueryOdos,
		);
		return (
			supportedTokensQueryLifi.isSuccess && supportedTokensQueryOdos.isSuccess
		);
	}, [supportedTokensQueryLifi, supportedTokensQueryOdos]);

	const tokenData = useMemo(() => {
		console.log("AnyToken::tokenData", tokensLoaded);
		if (tokensLoaded) {
			//Convert lifi tokens
			const tokenDataLifi = supportedTokensQueryLifi.isSuccess
				? ((supportedTokensQueryLifi.data as any).data.tokens as LiFiTokenMap)
				: ({} as LiFiTokenMap);

			const lifiTokens = combineArraysFromObject<LiFiToken>(tokenDataLifi);
			const tokenDataLifiAsAny: AnyToken[] = lifiTokens.map(
				(token: LiFiToken) =>
					({
						name: token.name,
						symbol: token.symbol,
						address: token.address,
						chainId: token.chainId.toString(),
						decimals: token.decimals,
						type: "ERC20",
						price: token.priceUSD.toString(),
					}) as AnyToken,
			);

			//Convert ODOS tokens
			const tokenDataOdos = supportedTokensQueryOdos.isSuccess
				? ((supportedTokensQueryOdos.data as any).data.tokenMap as OdosTokenMap)
				: ({} as OdosTokenMap);

			const tokenDataOdosAsAny: AnyToken[] = Object.keys(tokenDataOdos).map(
				(contractAddress: string) => {
					return {
						name: tokenDataOdos[contractAddress].name,
						decimals: tokenDataOdos[contractAddress].decimals,
						address: contractAddress,
						symbol: tokenDataOdos[contractAddress].symbol,
						chainId: initialTokenChain || "1",
						type: "ERC20",
					} as AnyToken;
				},
			);

			//convert tokens with gas token
			const tokensWithGasTokenAsAny: AnyToken[] = tokensWithGasToken.map(
				(token) => {
					return {
						name: token.name,
						symbol: token.symbol,
						address: token.address,
						chainId: token.chainId,
						decimals: token.decimals,
						type: token.type == "native" ? "ETH" : "ERC20",
						price: token.price.toString(),
					} as AnyToken;
				},
			);

			let tokenData = [
				...tokensWithGasTokenAsAny,
				...tokenDataLifiAsAny,
				...tokenDataOdosAsAny,
			];
			//remove duplicates of the same address
			tokenData = tokenData.filter(
				(token, index, self) =>
					index ===
					self.findIndex(
						(t) => t.address === token.address && t.chainId === token.chainId,
					),
			);

			return tokenData;
		}
		return [];
	}, [tokensLoaded]);

	const filterTokens = () => {
		let tokens = [];
		tokens = tokenData;
		if (initialTokenChain)
			tokens = tokens.filter((token) => {
				return token.chainId === initialTokenChain;
			});
		tokens = tokens.filter((token) => {
			return token.name.toLowerCase().includes(searchTerm.toLowerCase());
		});
		//sort based on how close the search term length is to the token name length
		if (searchTerm !== "")
			tokens = tokens.sort((a, b) => {
				return (
					Math.abs(a.name.length - searchTerm.length) -
					Math.abs(b.name.length - searchTerm.length)
				);
			});
		setFilteredTokens(tokens);
	};

	const debouncedFilterTokens = useDebounceCallback(filterTokens, 1000);

	useEffect(() => {
		debouncedFilterTokens();
	}, [tokenData, initialTokenChain, searchTerm]);

	const toggleModal = (e?: any) => {
		e && e.preventDefault(); // Prevent form submission
		setIsOpen(!isOpen);
	};

	const handleTokenSelect = (tokenAddress: string) => {
		setSelectedTokenAddress(tokenAddress);
		onSelect(tokenAddress);
		toggleModal();
	};

	const selectedToken = filteredTokens.find(
		(token: AnyToken) => token.address === selectedTokenAddress,
	);

	return (
		<>
			<button
				disabled={!tokensLoaded}
				className="bg-accent-color rounded-xl p-3 m-1 text-text-primary"
				onClick={toggleModal}
				{...buttonProps}
			>
				{tokensLoaded
					? (selectedToken && selectedToken?.name) || "Select Token"
					: "Loading Tokens..."}
			</button>
			<Modal isOpen={isOpen} toggleModal={toggleModal}>
				{title && (
					<h2 className="text-xl font-semibold mb-4" {...headerProps}>
						{title}
					</h2>
				)}
				<Input
					label="Search Tokens"
					type="text"
					placeholder="Search tokens..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full p-2 mb-4 border border-gray-300 rounded"
					{...inputProps}
				/>
				<div className="max-h-[300px] overflow-y-auto" {...listProps}>
					{filteredTokens.map((token) => (
						<div
							key={token.address + token.chainId}
							onClick={() => handleTokenSelect(token.address)}
							className="p-2 cursor-pointer hover:bg-accent-color rounded-sm"
							{...listItemProps}
						>
							{token.name} ({token.symbol}) - {token.chainId}
						</div>
					))}
				</div>
			</Modal>
		</>
	);
};
