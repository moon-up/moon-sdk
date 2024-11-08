import { IconChevronRight, IconUser } from "@/assets/icons";
import { Button } from "@/components";
import { useAuth } from "@/hooks";
/**
 * SignInAnonymously component allows users to sign in anonymously.
 *
 * This component renders a button that, when clicked, triggers the
 * `signInAnonymously` function from the `useAuth` hook to sign in the user
 * without requiring any credentials.
 *
 * @returns {JSX.Element} A button element that initiates anonymous sign-in.
 */
export function SignInAnonymously() {
	const { signInAnonymously } = useAuth();

	return (
		<Button
			onClick={async () => {
				await signInAnonymously();
			}}
			color="accentColor"
		>
			<IconUser className="absolute left-5 w-[30px]" />
			Anonymous Login
			<IconChevronRight className="absolute right-2 w-[30px]" />
		</Button>
	);
}
