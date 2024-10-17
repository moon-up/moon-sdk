import { Button, Input } from "@/components";
import { useAuth } from "@/index";
import type { AuthModalConfig } from "@/types";
import React, { useState } from "react";
import { useMoonSDK } from "../../../hooks/old/useMoonSDK";

/**
 * Props for the SignupForm component.
 *
 * @interface SignupFormProps
 * @property {AuthModalConfig} config - Configuration object for the authentication modal.
 * @property {Function} onSuccess - Callback function to be called upon successful signup.
 * @property {Function} onCancel - Callback function to be called when the signup process is cancelled.
 */
export interface SignupFormProps {
	config: AuthModalConfig;
	onSuccess: any;
	onCancel: any;
}

/**
 * SignupForm component handles the user sign-up process.
 *
 * @param {Object} props - The properties object.
 * @param {Function} props.onSuccess - Callback function to be called upon successful sign-up.
 * @param {Function} props.onCancel - Callback function to be called when the user cancels the sign-up process.
 * @param {Object} props.config - Configuration object for the sign-up form appearance and behavior.
 *
 * @returns {JSX.Element} The rendered sign-up form component.
 *
 * @component
 * @example
 * const handleSuccess = () => { console.log('Sign-up successful'); };
 * const handleCancel = () => { console.log('Sign-up cancelled'); };
 * const config = { appearance: { modal: { padding: '4' }, input: { placeholders: { email: 'Enter your email', password: 'Enter your password' } } } };
 *
 * <SignupForm onSuccess={handleSuccess} onCancel={handleCancel} config={config} />
 */
export const SignupForm = ({
	onSuccess,
	onCancel,
	config,
}: SignupFormProps) => {
	const [isSigningUp, setSigningUp] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const { authConfig } = useMoonSDK();
	const { signUpWithEmail } = useAuth();

	const handleSignupEmail = async () => {
		try {
			setSigningUp(true);
			const session = await signUpWithEmail(email, password);
			if (!session) {
				console.error("Invalid Session");
				setError("Invalid session");
				setSigningUp(false);
				return;
			}
			onSuccess();
			setSigningUp(false);
		} catch (err) {
			console.error(err);
			setError("An error occurred");
			setSigningUp(false);
		}
	};

	if (isSigningUp)
		return (
			<div className="flex flex-col gap-4 items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-text-primary"></div>
				Signing you up...
			</div>
		);
	return (
		<div
			className={`p-${config.appearance.modal.padding} justify-center items-center flex flex-col gap-5`}
		>
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
			<Button onClick={handleSignupEmail} color="infoColor">
				Sign Up
			</Button>
			{error && <div className="text-red-500">{error}</div>}

			<h3
				className="text-text-secondary hover:cursor-pointer hover:underline"
				onClick={onCancel}
			>
				Back to Login
			</h3>
		</div>
	);
};
