import React, { useMemo, useCallback } from "react";
import type { MoonSDKConfig } from "@moonup/moon-sdk";
import { MoonSDK } from "@moonup/moon-sdk";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";
import { supabase } from "../supabase";

export interface MoonAuthContextType {
	session: Session | null;
	user: User | null;
	signOut: () => Promise<void>;
	supabaseClient: SupabaseClient;
	moon: MoonSDK | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	connect: (accessToken?: string, refreshToken?: string) => Promise<void>;
	disconnect: () => Promise<void>;
}

export const MoonAuthContext = React.createContext<MoonAuthContextType>({
	session: null,
	user: null,
	signOut: async () => {},
	supabaseClient: supabase,
	moon: null,
	isAuthenticated: false,
	isLoading: true,
	connect: async (
		accessToken?: string,
		refreshToken?: string,
	): Promise<void> => {
		console.log("connecting");
		console.log("accessToken", accessToken);
		console.log("refreshToken", refreshToken);
	},
	disconnect: async (): Promise<void> => {},
});
export type MoonAuthProviderProps = {
	sdkConfig?: MoonSDKConfig;
	children: React.ReactNode;
};

export const MoonAuthProvider = ({
	children,
	sdkConfig,
}: MoonAuthProviderProps) => {
	const [user, setUser] = React.useState<User | null>(null);
	const [moon] = React.useState<MoonSDK>(
		new MoonSDK({
			authInstance: supabase,
			...sdkConfig,
		}),
	);
	const [session, setSession] = React.useState<Session | null>(null);
	const [isLoading, setIsLoading] = React.useState(true);
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);

	React.useEffect(() => {
		setIsLoading(true);
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, newSession) => {
				console.log("Auth state change:", event, newSession);

				switch (event) {
					case "INITIAL_SESSION":
						// Initial session will always be null, so we don't need to do anything here
						break;
					case "SIGNED_IN":
					case "TOKEN_REFRESHED":
					case "USER_UPDATED":
						if (newSession) {
							setSession(newSession);
							setUser(newSession.user);
							setIsAuthenticated(true);
							moon.moonAPIService.setSecurityData(newSession.access_token);
						}
						break;
					case "SIGNED_OUT":
						setSession(null);
						setUser(null);
						setIsAuthenticated(false);
						await moon.disconnect();
						break;
					case "PASSWORD_RECOVERY":
						// Handle password recovery if needed
						break;
					default:
						// Handle any other events if needed
						break;
				}
			},
		);
		const initializeAuth = async () => {
			// Initialize Moon first

			const {
				data: { session: initialSession },
				error,
			} = await supabase.auth.getSession();
			if (error) {
				console.error("Error fetching session:", error);
				setIsLoading(false);
				return;
			}

			if (initialSession) {
				setSession(initialSession);
				setUser(initialSession.user);
				setIsAuthenticated(true);
				moon.moonAPIService.setSecurityData(initialSession.access_token);
			}

			setIsLoading(false);

			// Set up auth listener after Moon is initialized
		};

		initializeAuth();

		return () => {
			authListener?.subscription.unsubscribe();
		};
	}, [moon]);

	const signOut = useCallback(async () => {
		setIsLoading(true);
		await supabase.auth.signOut();
		setIsLoading(false);
	}, []);

	const connect = useCallback(
		async (accessToken?: string, refreshToken?: string): Promise<void> => {
			if (moon) {
				const session = await moon.connect(accessToken, refreshToken);
				setSession(session);
				setIsAuthenticated(true);
				setUser(session.user);
			}
		},
		[moon],
	);

	const disconnect = useCallback(async (): Promise<void> => {
		if (moon) {
			await moon.disconnect();
			setSession(null);
			setIsAuthenticated(false);
			setUser(null);
		}
	}, [moon]);

	const value = useMemo(
		() => ({
			moon,
			session,
			user,
			signOut,
			supabaseClient: supabase,
			isAuthenticated,
			isLoading,
			connect,
			disconnect,
		}),
		[
			moon,
			session,
			user,
			signOut,
			isAuthenticated,
			isLoading,
			connect,
			disconnect,
		],
	);

	return (
		<MoonAuthContext.Provider value={value}>
			{!isLoading && children}
		</MoonAuthContext.Provider>
	);
};

export const useMoonAuth = () => React.useContext(MoonAuthContext);
