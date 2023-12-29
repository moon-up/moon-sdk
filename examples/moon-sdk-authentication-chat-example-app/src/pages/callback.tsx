import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMoonSDK } from '../hooks/moon';

function OAuth2Callback() {
	const location = useLocation();
	const { moon } = useMoonSDK();

	useEffect(() => {
		async function fetchData() {
			const urlParams = new URLSearchParams(location.search);
			const code = urlParams.get('code');

			if (code) {
				try {
					const response = await fetch(
						'https://vault-api.usemoon.ai/auth/oauth/openai/oauth_exchange',
						{
							method: 'POST',
							body: JSON.stringify({
								code: code,
								client_id: process.env.REACT_APP_CLIENT_ID,
								client_secret: process.env.REACT_APP_CLIENT_SECRET,
								redirect_uri: process.env.REACT_APP_REDIRECT_URI,
								grant_type: 'authorization_grant',
							}),
						}
					);
					const data = await response.json();
					console.log(data);
					moon?.updateToken(data.access_token);
					moon?.updateRefreshToken(data.refresh_token);
				} catch (error) {
					// Handle the error here
					console.error(error);
				}
			}
		}

		fetchData();
	}, [location]);

	return <div>Processing OAuth2 callback...</div>;
}

export default OAuth2Callback;
