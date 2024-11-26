// useChains.ts
import { useMoonSDK } from "@/hooks";
import type { Chains } from "@moonup/moon-sdk";
import { useCallback, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const useChains = () => {
	const { moon } = useMoonSDK();
	const [chains, setChains] = useLocalStorage<Chains[]>("moonChains", []);
	const [selectedChain, setSelectedChain] = useLocalStorage<Chains | null>(
		"moonSelectedChain",
		null,
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	const fetchChains = useCallback(async () => {
		if (!moon) {
			setError(new Error("MoonSDK not initialized"));
			setLoading(false);
			return;
		}

		try {
			setLoading(true);
			const chainService = moon.getChainService();
			const fetchedChains = await chainService.getChains();
			setChains(fetchedChains);
			setLoading(false);
		} catch (err) {
			setError(
				err instanceof Error ? err : new Error("Failed to fetch chains"),
			);
			setLoading(false);
		}
	}, [moon]);

	const switchChain = useCallback(
		(chainId: number) => {
			try {
				const newSelectedChain = chains.find(
					(chain) => chain.chain_id === chainId,
				);
				console.log("newSelectedChain", newSelectedChain);
				if (newSelectedChain) {
					// Create a new object to ensure React detects the change
					setSelectedChain((prevChain) => {
						if (prevChain?.chain_id === newSelectedChain.chain_id) {
							return prevChain; // No change needed
						}
						return { ...newSelectedChain };
					});
					moon?.chainService.setSelectedChain(newSelectedChain);
				} else {
					throw new Error(`Chain with id ${chainId} not found`);
				}
			} catch (err) {
				setError(
					err instanceof Error ? err : new Error("Failed to switch chain"),
				);
			}
		},
		[moon, chains],
	);

	const getChainById = useCallback(
		(id: number): Chains | undefined => {
			return chains.find((chain) => chain.chain_id === id);
		},
		[chains],
	);

	// useEffect(() => {
	// 	if (moon && chains.length > 0) {
	// 		const initialSelectedChain = moon.getChainService().getSelectedChain();
	// 		setSelectedChain(initialSelectedChain);
	// 	}
	// }, [moon, chains]);

	return {
		chains,
		selectedChain,
		loading,
		error,
		fetchChains,
		switchChain,
		getChainById,
	};
};
