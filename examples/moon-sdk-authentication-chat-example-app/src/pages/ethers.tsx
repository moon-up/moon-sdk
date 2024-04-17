// new react page that initialises ethers provider

export default function EthersPage() {
  // const [transaction, setTransaction] = useState<any>(null); // [1
  // const { moonProvider, signer } = useMoonEthers();
  // let { ethereum } = window as any;
  // const RedeemEthosTransaction = async () => {
  //   if (!ethereum) {
  //     return;
  //   }
  //   if (!moonProvider) {
  //     return;
  //   }
  //   ethereum = moonProvider;
  //   const OPTI_CHAIN_ID = 10;
  //   const ETHOS_ADDRESS = '0xd584a5e956106db2fe74d56a0b14a9d64be8dc93';
  //   const chain = getChain(`0xa`);
  //   console.log(chain);
  //   // moonProvider.signer.moonWallet.updateWallet();
  //   // const swapchain = await ethereum.request({
  //   //   method: 'wallet_switchEthereumChain',
  //   //   params: [{ chainId: `0xa` }],
  //   // });
  //   // console.log(swapchain);
  //   const ETHOS_CONTRACT = new ethers.Contract(ETHOS_ADDRESS, ETHOS_ABI, moonProvider);
  //   // call redeem collateral
  //   const redeem = await ETHOS_CONTRACT.populateTransaction.redeemCollateral(
  //     '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
  //     1000000000,
  //     '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
  //     '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
  //     '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
  //     1000000000,
  //     1000000000,
  //     1
  //   );
  //   // sign transaction
  //   const wallets = signer?.MoonSDK.listAccounts();
  //   const tx = signer?.signTransaction(redeem);
  //   const broadcast = await ethereum.request({
  //     method: 'eth_sendTransaction',
  //     params: [tx],
  //   });
  //   // save tx hash to state
  //   console.log(tx);
  //   console.log(broadcast);
  // };
  // return (
  //   <div>
  //     <button onClick={RedeemEthosTransaction}>Redeem Ethos</button>
  //   </div>
  // );
}
