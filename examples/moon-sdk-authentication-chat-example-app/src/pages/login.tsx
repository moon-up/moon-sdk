import { useEffect, useState } from 'react';
import { useMoonSDK } from '../hooks/moon';

// Signup Component
function SignupPage() {
	const { moon, initialize, disconnect } = useMoonSDK();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [walletAddress, setWalletAddress] = useState('');

	const handleSignup = async () => {
		try {
			// Check if Moon SDK is properly initialized and user is authenticated
			if (!moon || !moon.MoonAccount.isAuth) {
				console.error('User not authenticated');
				return;
			}

			const { token, refreshToken } = await moon
				.getAuthSDK()
				.emailLogin({
					email,
					password,
				})
				.then((res) => {
					console.log(res);
					return res.json();
				});
			moon.updateToken(token);
			moon.updateRefreshToken(refreshToken);
		} catch (error) {
			console.error(error);
		}
	};

	// Use useEffect to initialize Moon SDK on component mount
	useEffect(() => {
		initialize();

		// Cleanup Moon SDK on component unmount
		return () => {
			disconnect();
		};
	}, []);

	return (
		<div>
			<h2>Create Moon Account</h2>
			<form>
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button type="button" onClick={handleSignup}>
					Login
				</button>
			</form>
		</div>
	);
}

export default SignupPage;
