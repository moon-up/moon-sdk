import {
	IconDiscord,
	IconGithub,
	IconGoogle,
	IconTwitter,
} from "@/assets/icons";
import { useOAuth2 } from "@/hooks";
import type {
	SocialOptionArray as SocialLoginsType,
	SocialOption,
} from "@/types";
import type React from "react";
import { useEffect } from "react";

/**
 * Props for the SocialLogins component.
 *
 * @interface SocialLoginsProps
 * @property {SocialLoginsType} socialLogins - An object containing the social login options.
 */
export interface SocialLoginsProps {
	socialLogins: SocialLoginsType;
}

/**
 * SocialLogins component renders social login buttons and handles OAuth2 authentication flow.
 *
 * @param {SocialLoginsProps} props - The properties for the SocialLogins component.
 * @param {SocialOption[]} props.socialLogins - An array of social login providers to display.
 *
 * @returns {JSX.Element} The rendered social login buttons.
 *
 * @example
 * <SocialLogins socialLogins={['discord', 'github', 'twitter', 'google']} />
 *
 * @remarks
 * This component uses the `useOAuth2` hook to initiate and handle OAuth2 authentication.
 * It stores the selected provider in localStorage and processes the OAuth callback.
 *
 * @component
 */
export function SocialLogins({ socialLogins }: SocialLoginsProps) {
	const { initiateOAuth, handleOAuthCallback } = useOAuth2();

	useEffect(() => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get("code");
		const provider = localStorage.getItem("moon_auth_provider") as SocialOption;

		if (code && provider) {
			handleOAuthCallback(provider, code)
				.then(() => {
					// Clear the code from the URL
					url.searchParams.delete("code");
					window.history.replaceState({}, "", url.toString());
				})
				.catch((error) => console.error("OAuth callback error:", error))
				.finally(() => {
					localStorage.removeItem("moon_auth_provider");
				});
		}
	}, [handleOAuthCallback]);

	const handleSignIn = (provider: SocialOption) => {
		localStorage.setItem("moon_auth_provider", provider);
		initiateOAuth(provider);
	};

	const socialButtons: {
		provider: SocialOption;
		Icon: React.ComponentType<{ className?: string }>;
		bgColor: string;
	}[] = [
		{ provider: "discord", Icon: IconDiscord, bgColor: "bg-accent-color" },
		{ provider: "github", Icon: IconGithub, bgColor: "bg-gray-900" },
		{ provider: "twitter", Icon: IconTwitter, bgColor: "bg-sky-500" },
		{ provider: "google", Icon: IconGoogle, bgColor: "bg-zinc-50" },
	];

	return (
		<>
			{socialButtons
				.filter(({ provider }) => socialLogins.includes(provider))
				.map(({ provider, Icon, bgColor }) => (
					<div
						key={provider}
						className={`p-2 ${bgColor} w-min h-min rounded-xl border-2 border-transparent hover:border-white cursor-pointer`}
						onClick={() => handleSignIn(provider)}
					>
						<Icon
							className={`w-[30px] h-[30px] ${
								provider === "google" ? "text-[#000000]" : ""
							}`}
						/>
					</div>
				))}
		</>
	);
}
