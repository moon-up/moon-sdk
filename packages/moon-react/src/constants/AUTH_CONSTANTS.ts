import moonLogoLight from "@/assets/moon-logo-light.png";
import type { AuthModalConfig } from "@/types";

export const DEFAULT_AUTH_CONFIG: AuthModalConfig = {
	enabled: true,
	socialLogins: ["discord", "github", "twitter", "google"],
	walletConnectEnabled: true,
	anonymousLoginEnabled: true,
	appearance: {
		logo: {
			//done
			src: moonLogoLight,
			height: "auto",
			width: "150px",
			position: "left",
			enabled: true,
		},
		welcomeMessage: {
			//done
			title: "Welcome back!",
			subtitle: "Sign in to your account to continue",
			position: "above",
			enabled: true,
		},
		signupMessage: {
			//done
			title: "Sign up",
			subtitle: "Enter your email and password to sign up",
		},
		modal: {
			//done
			borderRadius: "3px",
			padding: "8",
			width: "450px",
		},
		input: {
			//done
			borderRadius: "3px",
			placeholders: {
				email: "eg. ILoveMoon@gmail.com",
				password: "******",
			},
		},
		button: {
			borderRadius: "3px",
			padding: "2",
		},
		// splashImage: {
		//   src: string,
		//   height: number,
		//   width: number,
		//   className: string,
		//   enabled: boolean,
		// },
		// font: string,
	},
	theming: {
		accentColor: "#3B82F6",
		successColor: "#10B981",
		errorColor: "#EF4444",
		infoColor: "#3B82F6",
		warningColor: "#F59E0B",
		backgroundColor: "#FFFFFF",
		backgroundColorSecondary: "#F3F4F6",
		textColor: "#1F2937",
		textColorSecondary: "#6B7280",
		buttonColor: "#3B82F6",
		buttonColorSecondary: "#E5E7EB",
		fontFamily: "Inter, sans-serif",
		colors: {
			primary: "#3B82F6",
			secondary: "#6B7280",
			background: "#FFFFFF",
			surface: "#F3F4F6",
			text: "#1F2937",
			textSecondary: "#6B7280",
			border: "#E5E7EB",
			hover: "#F3F4F6",
			focus: "#3B82F6",
			disabled: "#D1D5DB",
			selected: "#EBF5FF",
			selectedText: "#1E40AF",
		},
		borderRadius: "0.375rem",
		boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
		typography: {
			fontFamily: "Inter, sans-serif",
			fontSize: {
				xs: "0.75rem",
				sm: "0.875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
			},
			fontWeight: {
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
			},
			lineHeight: {
				tight: "1.25",
				normal: "1.5",
				relaxed: "1.75",
			},
		},
		spacing: {
			xs: "0.25rem",
			sm: "0.5rem",
			md: "1rem",
			lg: "1.5rem",
			xl: "2rem",
		},
		transition: {
			fast: "150ms",
			normal: "300ms",
			slow: "500ms",
		},
	},
};
