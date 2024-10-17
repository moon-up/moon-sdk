import {
	AnyTokenSelectorModal,
	Button,
	ChainSelector,
	ChainSelectorModal,
	ChatBot,
	LifiChainSelectorModal,
	LifiTokenSelectorModal,
	SwapInterface,
	UserTokenManager,
	WalletSelector,
	WalletSelectorModal,
} from "@/components";
import { useAave, useChains, useMoonAccount } from "@/hooks";
import type { Chains } from "@moonup/moon-sdk";
import type { Session } from "@supabase/supabase-js";
import React from "react";
import { useAccount } from "wagmi";
import { useMoonAuth } from "../../context";
import { useMoonSDK } from "../../hooks/old/useMoonSDK";
interface AccountInfoProps {
	session: Session | null;
	address: string | undefined;
	status: string | undefined;
	selectedChain: Chains | null;
}
interface WalletSectionProps {
	accounts: string[];
	createAccount: (input: any) => void;
	deleteAccount: (wallet: string) => Promise<void>;
	getBalance: (wallet: string) => void;
}
interface LifiSectionProps {
	setLifiChainKey: React.Dispatch<React.SetStateAction<string | undefined>>;
	lifiChainKey: string | undefined;
}
interface ChatBotSectionProps {
	setChatOpen: (isOpen: boolean) => Promise<void>;
	chatOpen: boolean;
}

interface AaveSectionProps {
	getAaveV3PoolAddress: (
		accountName: string,
		chainId: string,
	) => Promise<string | undefined>;
	accounts: string[];
}

export function Account() {
	const { address, status } = useAccount();
	const { setChatOpen, chatOpen } = useMoonSDK();
	const { moon, session, signOut } = useMoonAuth();
	const { fetchChains, selectedChain } = useChains();
	const { accounts, createAccount, deleteAccount, listAccounts, getBalance } =
		useMoonAccount();

	const [lifiChainKey, setLifiChainKey] = React.useState<string | undefined>();
	const { getAaveV3PoolAddress } = useAave();

	React.useEffect(() => {
		listAccounts();
		fetchChains();
	}, [listAccounts, fetchChains]);

	if (!moon || !session) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col items-center gap-4 p-4 bg-background-primary h-[100vh] overflow-scroll">
			<AccountInfo
				session={session}
				address={address}
				status={status}
				selectedChain={selectedChain}
			/>
			<WalletSection
				accounts={accounts}
				createAccount={createAccount}
				deleteAccount={deleteAccount}
				getBalance={getBalance}
			/>
			<ChainSection />
			<LifiSection
				setLifiChainKey={setLifiChainKey}
				lifiChainKey={lifiChainKey}
			/>
			<TokenManagerSection />
			<SwapSection />
			<AnyTokenSelectorSection />
			<ChatBotSection setChatOpen={setChatOpen} chatOpen={chatOpen} />
			<AaveSection
				getAaveV3PoolAddress={getAaveV3PoolAddress}
				accounts={accounts}
			/>
			<SignOutButton signOut={signOut} />
		</div>
	);
}

function AccountInfo({
	session,
	address,
	status,
	selectedChain,
}: AccountInfoProps) {
	return (
		<div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
			<div className="text-center text-xl font-semibold">
				<p>Welcome, {session?.user?.email}</p>
				{address && <p>Address: {address}</p>}
				{status && <p>Status: {status}</p>}
				{selectedChain && <p>Chain: {selectedChain.name}</p>}
			</div>
		</div>
	);
}

function WalletSection({
	accounts,
	createAccount,
	deleteAccount,
	getBalance,
}: WalletSectionProps) {
	return (
		<div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
			{accounts && accounts.length > 0 ? (
				<div>
					<div className="text-center text-xl font-semibold">Wallets</div>
					<WalletSelector
						selectProps={{
							className:
								"max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary",
						}}
					/>
					<WalletSelectorModal
						title="Wallet Selector"
						inputProps={{
							label: "Select Wallet",
						}}
					/>
					{accounts.map((wallet) => (
						<div
							key={wallet}
							className="text-center text-xl flex gap-4 items-center justify-center mb-1"
							onClick={() => getBalance(wallet)}
						>
							{wallet}{" "}
							<Button
								className="bg-red-500"
								onClick={async () => {
									await deleteAccount(wallet);
								}}
							>
								Delete
							</Button>
						</div>
					))}
				</div>
			) : (
				<div>
					<div className="text-center text-xl font-semibold">
						No wallets connected
					</div>
					<button
						type="button"
						className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
						onClick={createAccount}
					>
						create wallet
					</button>
				</div>
			)}
		</div>
	);
}

function ChainSection() {
	return (
		<div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
			<div className="text-center text-xl font-semibold">Moon Chains</div>
			<ChainSelector
				selectProps={{
					className:
						"max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary",
				}}
			/>
			<ChainSelectorModal
				title="Chain Selector"
				inputProps={{
					label: "Select Chain",
				}}
			/>
		</div>
	);
}

function LifiSection({ setLifiChainKey, lifiChainKey }: LifiSectionProps) {
	return (
		<div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
			<div className="text-center text-xl font-semibold">Lifi</div>
			<LifiChainSelectorModal
				onSelect={(chainId: string) => {
					console.log(chainId);
					setLifiChainKey(chainId);
				}}
			/>
			<LifiTokenSelectorModal
				initialTokenChain={lifiChainKey}
				onSelect={(chainId: string) => {
					console.log(chainId);
				}}
			/>
		</div>
	);
}

function TokenManagerSection() {
	return (
		<div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
			<div className="text-center text-xl font-semibold">Token Manager</div>
			<UserTokenManager />
		</div>
	);
}

function SwapSection() {
	return (
		<div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
			<div className="text-center text-xl font-semibold">Swap Interface</div>
			<SwapInterface />
		</div>
	);
}

function AnyTokenSelectorSection() {
	return (
		<div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
			<div className="text-center text-xl font-semibold">
				Any Token Selector
			</div>
			<AnyTokenSelectorModal
				onSelect={(tokenAddress: string) => {
					console.log(tokenAddress);
				}}
			/>
		</div>
	);
}

function ChatBotSection({ setChatOpen, chatOpen }: ChatBotSectionProps) {
	return (
		<>
			<ChatBot />
			<Button
				color="infoColor"
				onClick={() => {
					setChatOpen(!chatOpen);
				}}
			>
				Open Chat
			</Button>
		</>
	);
}

function AaveSection({ getAaveV3PoolAddress, accounts }: AaveSectionProps) {
	return (
		<Button
			color="infoColor"
			onClick={async () => {
				const res = await getAaveV3PoolAddress(accounts[0], "10");
				console.log(res);
			}}
		>
			Get AaveV3Pool
		</Button>
	);
}

function SignOutButton({
	signOut,
}: {
	signOut: () => void;
}) {
	return (
		<Button color="errorColor" onClick={signOut}>
			sign out
		</Button>
	);
}

export default Account;
