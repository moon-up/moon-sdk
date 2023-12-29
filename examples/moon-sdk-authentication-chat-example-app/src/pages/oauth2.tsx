function LoginButton() {
	const handleClick = () => {
		const response_type = process.env.REACT_APP_RESPONSE_TYPE;
		const client_id = process.env.REACT_APP_CLIENT_ID;
		const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
		const scope = process.env.REACT_APP_SCOPE;
		const state = process.env.REACT_APP_STATE;

		const redirectUrl = `https://wallet.usemoon.ai/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;

		window.location.href = redirectUrl;
	};

	return <button onClick={handleClick}>Login with Moon</button>;
}

export default LoginButton;
