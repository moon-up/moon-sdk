import { IconArrowLeft, IconWallet } from "@/assets/icons";
import { useConnectToMoon } from "@/hooks";
import { useEffect, useRef } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";

/**
 * Props for the WalletConnectorList component.
 *
 * @interface WalletConnectorsListProps
 * @property {Function} onBack - Callback function to handle the back action.
 */
interface WalletConnectorsListProps {
	onBack: any;
}

/**
 * WalletConnectorsList component renders a list of wallet connectors and allows the user to connect to a wallet.
 *
 * @param {WalletConnectorsListProps} props - The properties for the WalletConnectorsList component.
 * @param {function} props.onBack - Callback function to handle the back button click event.
 *
 * @returns {JSX.Element} The rendered WalletConnectorsList component.
 *
 * @example
 * <WalletConnectorsList onBack={() => console.log('Back button clicked')} />
 *
 * @remarks
 * This component uses the `useConnect`, `useAccount`, `useSignMessage`, and `useConnectToMoon` hooks to manage wallet connections.
 * It filters out duplicate connectors and displays a list of unique connectors.
 * When a connector is clicked, it triggers the `handleConnect` function to initiate the connection process.
 * If the user is already connected, it automatically calls `connectToMoonSiwe`.
 */
export const WalletConnectorsList = ({ onBack }: WalletConnectorsListProps) => {
	const { connectors, connect } = useConnect();
	const { address, isConnected } = useAccount();
	const { signMessageAsync } = useSignMessage();
	const walletAddress = address ? address : "";
	const { connectToMoonSiwe } = useConnectToMoon({
		address: walletAddress,
		signMessageAsync,
	});
	const hasAttemptedConnection = useRef(false);

	useEffect(() => {
		if (isConnected && address && !hasAttemptedConnection.current) {
			connectToMoonSiwe();
			hasAttemptedConnection.current = true;
		}
	}, [isConnected, address, connectToMoonSiwe]);

	const handleConnect = async (connector: any) => {
		if (isConnected) {
			if (!hasAttemptedConnection.current) {
				connectToMoonSiwe();
				hasAttemptedConnection.current = true;
			}
			return;
		}
		connect({ connector });
	};

	//remove duplicate connectors
	const uniqueConnectors = connectors.filter(
		(v: any, i: any, a: any) =>
			a.findIndex((t: any) => t.name === v.name) === i,
	);

	return (
		<div className="p-8 pt-15 justify-center items-center flex flex-col gap-5">
			<div
				className="pl-5 pt-5 justify-center items-center flex gap-5 absolute top-0 left-0 opacity-70 hover:opacity-100 cursor-pointer hover"
				onClick={onBack}
			>
				<IconArrowLeft className="w-6 h-6" />
				Back
			</div>
			<div className="flex flex-col justify-center gap-5 items-center overflow-y-auto">
				<IconWallet className="text-accent w-[40px] h-[40px]" />
				<p className="text-text-secondary">Connect to a wallet</p>
				{uniqueConnectors &&
					uniqueConnectors.map((connector: any) => (
						<div key={connector.uid} className="flex flex-col items-center">
							<button
								onClick={() => handleConnect(connector)}
								className="border-2 border-transparent relative p-2 bg-accent-color w-80 h-30 rounded-sm flex items-center justify-center gap-2 text-text-primary hover:border-2 hover:border-text-primary hover:bg-accent-color hover:text-text-primary"
							>
								{connector.name}
							</button>
						</div>
					))}
			</div>
		</div>
	);
};
