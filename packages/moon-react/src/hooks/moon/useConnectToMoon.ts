import { useAuth, useMoonSDK } from "@/hooks";
import { useState } from "react";
import { SiweMessage } from "siwe";
import { useChainId } from "wagmi";

export interface ConnectToMoonProps {
	address: string;
	signMessageAsync: any;
}

export const useConnectToMoon = ({
	address,
	signMessageAsync,
}: ConnectToMoonProps) => {
	// wagmi get chainId
	const { connect } = useMoonSDK();

	const [isLoading, setIsLoading] = useState(false);
	const chainId = useChainId();

	const { verifySIWESignature, getSIWENonce } = useAuth();

	const connectToMoonSiwe = async () => {
		if (!address) return;

		setIsLoading(true);

		try {
			const nonce = await getSIWENonce(address);
			if (!nonce) return;
			const message = new SiweMessage({
				domain: window.location.host,
				address,
				statement: "Sign in with Ethereum to the app.",
				uri: window.location.origin,
				version: "1",
				chainId: chainId,
				nonce: nonce,
			});
			const signedMessage = await signMessageAsync({
				message: message.prepareMessage(),
			});

			const session = await verifySIWESignature(
				address,
				signedMessage,
				nonce,
				message,
			);
			if (!session) return;
			connect(session.access_token, session.refresh_token);
		} catch (err) {
			console.error("An error occurred:", err);
		} finally {
			setIsLoading(false);
		}
	};

	return { connectToMoonSiwe, isLoading };
};
