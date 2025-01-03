import { Button, Input } from "@/components";
import { useAuth } from "@/hooks";
import type { AuthModalConfig } from "@/types";
import { useState } from "react";
import { useMoonSDK } from "../../../hooks/old/useMoonSDK";

/**
 * Props for the EmailLogin component.
 *
 * @interface EmailLoginProps
 * @property {AuthModalConfig} config - Configuration object for the authentication modal.
 */
export interface EmailLoginProps {
	config: AuthModalConfig;
}
/**
 * EmailLogin component allows users to log in using their email and password.
 *
 * @param {EmailLoginProps} props - The properties for the EmailLogin component.
 * @param {object} props.config - Configuration object for the component.
 *
 * @returns {JSX.Element} The rendered EmailLogin component.
 *
 * @component
 *
 * @example
 * return (
 *   <EmailLogin config={config} />
 * );
 *
 * @remarks
 * This component uses the `useMoonSDK` and `useAuth` hooks to handle authentication.
 * It manages its own state for email, password, and error messages.
 *
 * @function
 * @name EmailLogin
 */
export const EmailLogin = ({ config }: EmailLoginProps) => {
	const [isLoggingIn, setIsLoggingIn] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const { authConfig } = useMoonSDK();
	const { signInWithEmail } = useAuth();

	const handleLoginEmail = async () => {
		try {
			setIsLoggingIn(true);
			const response = await signInWithEmail(email, password);
			// console.log("login response", response);
			if (!response) {
				setError("Invalid email or password");
				setIsLoggingIn(false);
				return;
			}
			setIsLoggingIn(false);
		} catch (error) {
			console.error(error);
			setError("An error occurred");
			setIsLoggingIn(false);
		}
	};
	if (isLoggingIn)
		return (
			<div className="flex flex-col gap-4 items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-text-primary"></div>
				Logging in...
			</div>
		);

	return (
		<>
			<Input
				label="Email"
				id="email"
				type="text"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				style={{
					borderRadius: authConfig.appearance.input.borderRadius || "3px",
				}}
				placeholder={
					config?.appearance?.input?.placeholders?.email ||
					"eg. ILoveMoon@gmail.com"
				}
			/>
			<Input
				label="Password"
				id="password"
				type="password"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder={
					config?.appearance?.input?.placeholders?.password || "******"
				}
			/>
			<Button onClick={handleLoginEmail} color="successColor">
				Login
			</Button>
			{error && <div className="text-red-500">{error}</div>}
		</>
	);
};
