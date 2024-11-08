import {
	Button,
	TokenContextMenu,
	TokenInfoModal,
	TokenListItem,
	TokenModal,
} from "@/components";
import { useMoonAccount, useMoonTokenManager } from "@/hooks";
import { shortenAddress } from "@/utils";
import React, { useMemo, useState } from "react";
import type { UserToken } from "./types";
import { useTokenManagmentUIState } from "./useTokenManagmentUIState";

export const UserTokenManager: React.FC = () => {
	const [contextMenuToken, setContextMenuToken] =
		React.useState<UserToken | null>();
	const { accounts: wallets, account: wallet } = useMoonAccount();
	const {
		tokensWithGasToken: tokens,
		addToken,
		removeToken,
		updateToken,
		tokenList,
		chain,
	} = useMoonTokenManager(wallets);

	const [activeFilters, setActiveFilters] = useState<string[]>([
		"balance>0",
		`selectedWallet`,
		`selectedChain`,
		"native",
		"erc20",
	]);

	const {
		tokenInfoModalCGID,
		isEditingExistingToken,
		setTokenInfoModalCGID,
		cgToken,
		setCgToken,
		newToken,
		setNewToken,
		isModalOpen,
		autocompleteOptions,
		showAutocomplete,
		platforms,
		selectedPlatform,
		contextMenuOpen,
		toggleModal,
		handleAutocompleteChange,
		handleAutocompleteSelect,
		handlePlatformChange,
		toggleContextMenu,
	} = useTokenManagmentUIState(tokenList);

	const handleUpdateToken = async () => {
		await updateToken(newToken);
		setNewToken({
			type: "erc20",
			name: "",
			symbol: "",
			coinGeckoId: "",
			decimals: 0,
			address: "",
			chainId: 1,
			icon: "",
		});
		toggleModal();
	};

	const handleAddToken = async () => {
		await addToken(newToken);
		setNewToken({
			type: "erc20",
			name: "",
			symbol: "",
			coinGeckoId: "",
			decimals: 0,
			address: "",
			chainId: 1,
			icon: "",
		});
		toggleModal();
	};

	const toggleFilter = (filter: string) => {
		setActiveFilters((prev) =>
			prev.includes(filter)
				? prev.filter((f) => f !== filter)
				: [...prev, filter],
		);
	};

	const filteredTokens = useMemo(() => {
		return tokens.filter((token: UserToken) => {
			if (
				activeFilters.includes("balance>0") &&
				Number.parseFloat(token.balance || "0") <= 0
			) {
				return false;
			}
			if (
				activeFilters.includes(`selectedChain`) &&
				token.chainId !== chain?.chain_id
			) {
				return false;
			}
			if (
				activeFilters.includes(`selectedWallet`) &&
				token.wallet?.toLocaleLowerCase() !== (wallet || "").toLocaleLowerCase()
			) {
				return false;
			}
			const tokenType = token?.type || "erc20";
			if (!activeFilters.includes(tokenType)) {
				return false;
			}
			return true;
		});
	}, [tokens, activeFilters, chain?.chain_id]);

	const FilterButton: React.FC<{ filter: string; label: string }> = ({
		filter,
		label,
	}) => (
		<button
			onClick={() => toggleFilter(filter)}
			className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 rounded-full text-sm mr-2 mb-2 transition-colors duration-200 ${
				activeFilters.includes(filter)
					? "bg-accent-color text-white"
					: "bg-gray-200 text-gray-700 hover:bg-gray-300"
			}`}
		>
			{label}
		</button>
	);

	filteredTokens.sort((a, b) => {
		if (!a?.balance || !b?.balance) return 0;
		return Number.parseFloat(b.balance) - Number.parseFloat(a.balance);
	});
	return (
		<div className="p-4 max-w-[400px] relative">
			<div className="mb-4 flex flex-wrap">
				<FilterButton filter="balance>0" label="$>0" />
				<FilterButton
					filter={`selectedWallet`}
					label={shortenAddress(wallet) || "Wallet"}
				/>
				<FilterButton
					filter={`selectedChain`}
					label={`Chain: ${chain?.name || chain?.chain_id}`}
				/>
				<FilterButton filter="native" label="Native" />
				<FilterButton filter="erc20" label="ERC20" />
				<FilterButton filter="erc721" label="ERC721" />
				<FilterButton filter="erc1155" label="ERC1155" />
			</div>

			{filteredTokens.length === 0 && (
				<p className="ml-auto mr-auto mb-3 text-text-secondary">
					No tokens match the current filters
				</p>
			)}
			<ul className="mb-3 max-h-[400px] overflow-y-scroll">
				{filteredTokens.map((token) => (
					<TokenListItem
						key={token.address + token.chainId + token.wallet}
						token={token}
						onDotsClick={() => {
							toggleContextMenu(token.address + token.chainId + token.wallet);
							setContextMenuToken(token);
						}}
					/>
				))}
			</ul>
			<Button
				onClick={toggleModal}
				className="btn btn-primary mb-4"
				color="accentColor"
			>
				Add Token
			</Button>
			{contextMenuOpen && contextMenuToken && (
				<TokenContextMenu
					onRemove={() => removeToken(contextMenuToken.address)}
					onSend={() => alert("Send functionality not implemented")}
					onEdit={() => {
						setNewToken(contextMenuToken);
						setCgToken(contextMenuToken.coinGeckoId);
						toggleModal();
					}}
					onInfo={() => setTokenInfoModalCGID(contextMenuToken.coinGeckoId)}
					onClose={() => {
						toggleContextMenu(
							contextMenuToken.address +
								contextMenuToken.chainId +
								contextMenuToken.wallet,
						);
						setContextMenuToken(null);
					}} // Toggle to close the context menu
				/>
			)}

			<TokenModal
				isEditing={isEditingExistingToken}
				isOpen={isModalOpen}
				toggleModal={toggleModal}
				tokenInfo={newToken}
				cgToken={cgToken}
				setCgToken={(value: string) => handleAutocompleteChange(value)}
				autocompleteOptions={autocompleteOptions}
				showAutocomplete={showAutocomplete}
				handleAutocompleteChange={(e) =>
					handleAutocompleteChange(e.target.value)
				}
				handleAutocompleteSelect={handleAutocompleteSelect}
				platforms={platforms}
				selectedPlatform={selectedPlatform}
				handlePlatformChange={(e) => handlePlatformChange(e.target.value)}
				newToken={newToken}
				setNewToken={setNewToken}
				handleAddToken={handleAddToken}
				handleUpdateToken={handleUpdateToken}
			/>
			<TokenInfoModal
				isOpen={!!tokenInfoModalCGID}
				toggleModal={() => setTokenInfoModalCGID("")}
				cgTokenId={tokenInfoModalCGID}
			/>
		</div>
	);
};
