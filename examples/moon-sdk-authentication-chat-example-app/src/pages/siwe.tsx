import { AccountResponse } from '@moonup/moon-api';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { SiweMessage } from 'siwe';
import { useMoonSDK } from '../hooks/moon';

function SIWE() {
	const [accounts, setAccounts] = useState<string[]>([]);
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const { updateToken, listAccounts, moon } = useMoonSDK();
	const { ethereum } = window as any;
	const SIWE = async () => {
		if (typeof ethereum === 'undefined') {
			return;
		}

		const address = await ethereum
			.request({ method: 'eth_requestAccounts' })
			.then(function (accounts: any[]) {
				console.log(accounts);
				return accounts[0];
			});
		console.log(address);
		return fetch('https://vault-api.usemoon.ai/auth/ethereum/challenge', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				address: address,
			}),
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				return ethereum
					.request({ method: 'eth_requestAccounts' })
					.then(function (accounts: any[]) {
						return [accounts[0], json.nonce];
					});
			})
			.then(function (args) {
				const account = args[0];
				const address = ethers.utils.getAddress(account);
				const message = new SiweMessage({
					domain: window.location.host,
					address: address,
					statement: 'Sign in with Ethereum to the app.',
					uri: window.location.origin,
					version: '1',
					chainId: 1,
					nonce: args[1],
				});

				const m = message.prepareMessage();
				return ethereum
					.request({
						method: 'personal_sign',
						params: [m, address],
					})
					.then(function (signature: any) {
						return [m, signature];
					});
			})
			.then(function (args) {
				return fetch('https://vault-api.usemoon.ai/auth/ethereum', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify({
						message: args[0],
						signature: args[1],
						address,
					}),
				});
			})
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				console.log(json);
				updateToken(json.accessToken);
				// window.location.href = json.location;
			});
	};

	useEffect(() => {
		if (moon?.MoonAccount.isAuth) {
			setLoggedIn(true);
			getAccounts();
		}
	}, [moon]);

	const createAccount = async () => {
		const account = await moon?.getAccountsSDK().createAccount({}, {});
		console.log(account);
	};
	const createBitcoinAccount = async () => {
		const account = await moon?.getBitcoinSDK().createBitcoinAccount({}, {});
		console.log(account);
	};
	const signMessage = async () => {
		const message = await moon?.getAccountsSDK().signMessage(accounts[0], {
			data: 'Hello World',
		});
		console.log(message);
	};

	const getAccounts = async () => {
		const accounts = await moon?.getAccountsSDK().listAccounts();
		const newAccounts = (accounts?.data.data as AccountResponse).keys || [];
		setAccounts(newAccounts);
	};
	const signTransaction = async () => {
		const tx = await moon?.getAccountsSDK().signTransaction(accounts[0], {
			to: '0x1',
			value: '0x1',
			gas: '0x1',
			gasPrice: '0x1',
			nonce: '0x1',
			data: '0x1',
			chain_id: '1',
		});
		console.log(tx);
	};

	return (
		<div>
			{loggedIn ? (
				<h1>Logged In</h1>
			) : (
				<button id="siw-ethereum" onClick={SIWE}>
					Connect with Ethereum
				</button>
			)}

			{accounts.length > 0 ? (
				<ul>
					{accounts.map((account, index) => (
						<li key={index}>{account}</li>
					))}
				</ul>
			) : (
				<p>No accounts available.</p>
			)}
		</div>
	);
}

export default SIWE;
