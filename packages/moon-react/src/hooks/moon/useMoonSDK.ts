import { MoonAuthContext, type MoonAuthContextType } from "@/context";
import { useContext } from "react";

/**
 * Custom hook to access the MoonSDK context.
 *
 * This hook must be used within a `MoonSDKProvider` to access the SDK state.
 * If used outside of a `MoonSDKProvider`, it will throw an error.
 *
 * @returns {State} The current state of the MoonSDK context.
 * @throws {Error} If used outside of a `MoonSDKProvider`.
 */
export const useMoonSDK = (): MoonAuthContextType => {
	const context = useContext(MoonAuthContext);
	if (context === undefined) {
		throw new Error("useMoonSDK must be used within a MoonSDKProvider");
	}
	return context;
};
