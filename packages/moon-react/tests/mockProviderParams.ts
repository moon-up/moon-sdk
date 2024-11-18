import type { MoonSDK } from "@moonup/moon-sdk";
import { vitest } from "vitest";
import type { State } from "../src/context/MoonProvider";
import type { DBAdapterBase } from "../src/database/DBAdapterBase";
import type { AuthModalConfig } from "../src/types/types";

const mockDBAdapter: DBAdapterBase = {
	getUserWalletAliases: vitest.fn(),
	// Add other methods as needed
} as unknown as DBAdapterBase;

const mockAuthConfig: AuthModalConfig = {
	enabled: false,
	socialLogins: [],
	walletConnectEnabled: false,
	anonymousLoginEnabled: false,
	appearance: {
		logo: {
			src: "",
			height: "",
			width: "",
			position: "center",
			className: "",
			enabled: false,
		},
		welcomeMessage: {
			title: "",
			subtitle: "",
			position: "above",
			className: "",
			enabled: false,
		},
		signupMessage: {
			title: "",
			subtitle: "",
		},
		modal: {
			backdropColor: "",
			backgroundColor: "",
			borderRadius: "",
			padding: "",
			width: "",
			className: "",
		},
		input: {
			borderRadius: "",
			placeholders: {
				email: "",
				password: "",
			},
			className: "",
		},
		button: {
			borderRadius: "",
			padding: "",
			height: "",
			className: "",
		},
		splashImage: {
			src: "",
			height: "",
			width: "",
			className: "",
			enabled: false,
		},
		font: "",
	},
	theming: {
		accentColor: "",
		successColor: "",
		errorColor: "",
		infoColor: "",
		warningColor: "",
		backgroundColor: "",
		backgroundColorSecondary: "",
		textColor: "",
		textColorSecondary: "",
		buttonColor: "",
		buttonColorSecondary: "",
		fontFamily: "",
		borderRadius: "",
		boxShadow: "",
	},
};

export const mockProvider: State = {
	moon: {
		moonAPIService: {
			setSecurityData: vitest.fn(),
		},
		connect: vitest.fn(),
		disconnect: vitest.fn(),
	} as unknown as MoonSDK,
	dbAdapter: mockDBAdapter,
	authConfig: mockAuthConfig,
	connect: vitest.fn(),
	disconnect: vitest.fn(),
	isAuthenticated: false,
	session: null,
	setIsAuthenticated: vitest.fn(),
	setSession: vitest.fn(),
	supabase: null,
	wallets: [],
	aliases: [],
	chains: [],
	chain: null,
	loading: false,
	wallet: undefined,
	chatOpen: false,
	transactionHistory: [],
	signOut: vitest.fn(),
	createWallet: vitest.fn(),
	listWallets: vitest.fn(),
	fetchAliases: vitest.fn(),
	setWallet: vitest.fn(),
	getUserSession: vitest.fn(),
	connectEthers: vitest.fn(),
	disconnectEthers: vitest.fn(),
	request: vitest.fn(),
	listChains: vitest.fn(),
	setChain: vitest.fn(),
	setChatOpen: vitest.fn(),
	addTransactionResult: vitest.fn(),
};
