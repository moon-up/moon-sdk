export type AaveConfigType = {
  [key: string]: {
    pool: string;
    poolAddressesProvider: string;
    poolAddressesProviderRegistry: string;
    aclManager?: string;
    poolConfigurator?: string;
    incentives?: string;
    poolDataProvider?: string;
    uiIncentiveDataProviderV3?: string;
    uiPoolDataProviderV3?: string;
    wrappedTokenGateway?: string;
    walletBalanceProvider?: string;
    aaveOracle?: string;
    treasury?: string;
    treasuryController?: string;
    liquiditySwitchAdapter?: string;
    repayWithCollateralAdapter?: string;
    debtSwitchAdapter?: string;
    withdrawSwitchAdapter?: string;
    pullRewardsTransferStrategy?: string;
    l2Encoder?: string;
    migrationContract?: string;
  };
};
export const aaveConfig: AaveConfigType = {
  '1': {
    // Ethereum Mainnet
    poolAddressesProvider: '0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e',
    poolAddressesProviderRegistry: '0xbaA999AC55EAce41CcAE355c77809e68Bb345170',
    pool: '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2',
    aclManager: '0xc2aaCf6553D20d1e9d78E365AAba8032af9c85b0',
    poolConfigurator: '0x64b761D848206f447Fe2dd461b0c635Ec39EbB27',
    incentives: '0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb',
    poolDataProvider: '0x41393e5e337606dc3821075Af65AeE84D7688CBD',
    uiIncentiveDataProviderV3: '0x5a40cDe2b76Da2beD545efB3ae15708eE56aAF9c',
    uiPoolDataProviderV3: '0x194324C9Af7f56E22F1614dD82E18621cb9238E7',
    wrappedTokenGateway: '0xA434D495249abE33E031Fe71a969B81f3c07950D',
    walletBalanceProvider: '0xC7be5307ba715ce89b152f3Df0658295b3dbA8E2',
    aaveOracle: '0x54586bE62E3c3580375aE3723C145253060Ca0C2',
    treasury: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    treasuryController: '0x3d569673dAa0575c936c7c67c4E6AedA69CC630C',
    liquiditySwitchAdapter: '0xADC0A53095A0af87F3aa29FE0715B5c28016364e',
    repayWithCollateralAdapter: '0x35bb522b102326ea3F1141661dF4626C87000e3E',
    debtSwitchAdapter: '0xd7852E139a7097E119623de0751AE53a61efb442',
    withdrawSwitchAdapter: '0x78F8Bd884C3D738B74B420540659c82f392820e0',
    migrationContract: '0xb748952c7bc638f31775245964707bcc5ddfa',
  },
  '10': {
    // optimism
    poolAddressesProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    poolAddressesProviderRegistry: '0x770ef9f4fe897e59daCc474EF11238303F9552b6',
    pool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    aclManager: '0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B',
    poolConfigurator: '0x8145eddDf43f50276641b55bd3AD95944510021E',
    incentives: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    poolDataProvider: '0x7F23D86Ee20D869112572136221e173428DD740B',
    uiIncentiveDataProviderV3: '0xc0179321f0825c3e0F59Fe7Ca4E40557b97797a3',
    uiPoolDataProviderV3: '0x86b0521f92a554057e54B93098BA2A6Aaa2f4ACB',
    wrappedTokenGateway: '0x60eE8b61a13c67d0191c851BEC8F0bc850160710',
    walletBalanceProvider: '0xBc790382B3686abffE4be14A030A96aC6154023a',
    aaveOracle: '0xD81eb3728a631871a7eBBaD631b5f424909f0c77',
    treasury: '0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf',
    treasuryController: '0xA77E4A084d7d4f064E326C0F6c0aCefd47A5Cb21',
    liquiditySwitchAdapter: '0x830C5A67a0C95D69dA5fb7801Ac1773c6fB53857',
    repayWithCollateralAdapter: '0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16',
    debtSwitchAdapter: '0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034',
    withdrawSwitchAdapter: '0x78F8Bd884C3D738B74B420540659c82f392820e0',
    pullRewardsTransferStrategy: '0x9aE6d130Fa8a44C8f1487dD767Ab6bA33ca2b498',
    l2Encoder: '0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC',
  },
  '42161': {
    // Arbitrum
    poolAddressesProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    poolAddressesProviderRegistry: '0x770ef9f4fe897e59daCc474EF11238303F9552b6',
    pool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    aclManager: '0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B',
    poolConfigurator: '0x8145eddDf43f50276641b55bd3AD95944510021E',
    incentives: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    pullRewardsTransferStrategy: '0x2bB52F7779fA2A77Be64E199c18BD6437801caac',
    poolDataProvider: '0x7F23D86Ee20D869112572136221e173428DD740B',
    l2Encoder: '0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC',
    uiIncentiveDataProviderV3: '0xE92cd6164CE7DC68e740765BC1f2a091B6CBc3e4',
    uiPoolDataProviderV3: '0xc0179321f0825c3e0F59Fe7Ca4E40557b97797a3',
    wrappedTokenGateway: '0x5760E34c4003752329bC77790B1De44C2799F8C3',
    walletBalanceProvider: '0xBc790382B3686abffE4be14A030A96aC6154023a',
    aaveOracle: '0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7',
    treasury: '0x053D55f9B5AF8694c503EB288a1B7E552f590710',
    treasuryController: '0xC3301b30f4EcBfd59dE0d74e89690C1a70C6f21B',
    liquiditySwitchAdapter: '0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251',
    repayWithCollateralAdapter: '0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034',
    debtSwitchAdapter: '0x63dfa7c09Dc2Ff4030d6B8Dc2ce6262BF898C8A4',
    withdrawSwitchAdapter: '0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9',
  },
  '137': {
    // Polygon
    poolAddressesProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    poolAddressesProviderRegistry: '0x770ef9f4fe897e59daCc474EF11238303F9552b6',
    pool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    aclManager: '0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B',
    poolConfigurator: '0x8145eddDf43f50276641b55bd3AD95944510021E',
    incentives: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    pullRewardsTransferStrategy: '0xA1e255c216e0F7f1a54AeeA60BACB93CdE0FcF0D',
    poolDataProvider: '0x7F23D86Ee20D869112572136221e173428DD740B',
    uiIncentiveDataProviderV3: '0x5c5228aC8BC1528482514aF3e27E692495148717',
    uiPoolDataProviderV3: '0xE92cd6164CE7DC68e740765BC1f2a091B6CBc3e4',
    wrappedTokenGateway: '0xF5f61a1ab3488fCB6d86451846bcFa9cdc108eB0',
    walletBalanceProvider: '0xBc790382B3686abffE4be14A030A96aC6154023a',
    aaveOracle: '0xb023e699F5a33916Ea823A16485e259257cA8Bd1',
    treasury: '0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383',
    treasuryController: '0x73D435AFc15e35A9aC63B2a81B5AA54f974eadFe',
    liquiditySwitchAdapter: '0xC4aff49fCeD8ac1D818a6DCAB063f9f97E66ec5E',
    repayWithCollateralAdapter: '0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16',
    debtSwitchAdapter: '0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034',
    withdrawSwitchAdapter: '0x78F8Bd884C3D738B74B420540659c82f392820e0',
  },
  '250': {
    // Fantom
    poolAddressesProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    poolAddressesProviderRegistry: '0x770ef9f4fe897e59daCc474EF11238303F9552b6',
    pool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    aclManager: '0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B',
    poolConfigurator: '0x8145eddDf43f50276641b55bd3AD95944510021E',
    incentives: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    poolDataProvider: '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654',
    uiIncentiveDataProviderV3: '0x67Da261c14fd94cE7fDd77a0A8476E5b244089A9',
    uiPoolDataProviderV3: '0xddf65434502E459C22263BE2ed7cF0f1FaFD44c0',
    wrappedTokenGateway: '0x1DcDA4de2Bf6c7AD9a34788D22aE6b7d55016e1f',
    walletBalanceProvider: '0xBc790382B3686abffE4be14A030A96aC6154023a',
    aaveOracle: '0xfd6f3c1845604C8AE6c6E402ad17fb9885160754',
    treasury: '0xBe85413851D195fC6341619cD68BfDc26a25b928',
    treasuryController: '0xc0F0cFBbd0382BcE3B93234E4BFb31b2aABE36aD',
    repayWithCollateralAdapter: '0x1408401B2A7E28cB747b3e258D0831Fc926bAC51',
    liquiditySwitchAdapter: '0xE387c6053CE8EC9f8C3fa5cE085Af73114a695d3',
    pullRewardsTransferStrategy: '0x84d85013035BbFF5DD106CA7828c8781af331b84',
  },
  '43114': {
    // Avalanche
    poolAddressesProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    poolAddressesProviderRegistry: '0x770ef9f4fe897e59daCc474EF11238303F9552b6',
    pool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    aclManager: '0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B',
    poolConfigurator: '0x8145eddDf43f50276641b55bd3AD95944510021E',
    incentives: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    poolDataProvider: '0x374a2592f0265b3bb802d75809e61b1b5BbD85B7',
    uiIncentiveDataProviderV3: '0xC81CCebEA6A14bA007b96C0a1600D0bA0Df383a8',
    uiPoolDataProviderV3: '0x374a2592f0265b3bb802d75809e61b1b5BbD85B7',
    wrappedTokenGateway: '0xCf3045a03F83ADfBCbA1f19Cb2cF4E19075F8668',
    walletBalanceProvider: '0xBc790382B3686abffE4be14A030A96aC6154023a',
    aaveOracle: '0xEBd36016B3eD09D4693Ed4251c67Bd858c3c7C9C',
    treasury: '0x5ba7fd868c40c16f7aDfAe6CF87121E13FC2F7a0',
    treasuryController: '0xaCbE7d574EF8dC39435577eb638167Aca74F79f0',
    liquiditySwitchAdapter: '0x2Cf641F7C0eac2788A7924B82d6Ca8EB7bAa4E3A',
    repayWithCollateralAdapter: '0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16',
    debtSwitchAdapter: '0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034',
    withdrawSwitchAdapter: '0x78F8Bd884C3D738B74B420540659c82f392820e0',
    pullRewardsTransferStrategy: '0xA34205e73738f5C3443e8f8F7f13766adfF015eD',
  },
  '1666600000': {
    // harmony
    poolAddressesProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    poolAddressesProviderRegistry: '0x770ef9f4fe897e59daCc474EF11238303F9552b6',
    pool: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    aclManager: '0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B',
    poolConfigurator: '0x8145eddDf43f50276641b55bd3AD95944510021E',
    incentives: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    poolDataProvider: '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654',
    uiIncentiveDataProviderV3: '0xf7a60467aBb8A3240A0382b22E1B03c7d4F59Da5',
    uiPoolDataProviderV3: '0x1DcDA4de2Bf6c7AD9a34788D22aE6b7d55016e1f',
    wrappedTokenGateway: '0xE387c6053CE8EC9f8C3fa5cE085Af73114a695d3',
    walletBalanceProvider: '0xBc790382B3686abffE4be14A030A96aC6154023a',
    aaveOracle: '0x3C90887Ede8D65ccb2777A5d577beAb2548280AD',
    treasury: '0x8A020d92D6B119978582BE4d3EdFdC9F7b28BF31',
    treasuryController: '0xeaC16519923774Fd7723d3D5E442a1e2E46BA962',
    pullRewardsTransferStrategy: '0xbbe21588753Ff67D7E868D82c4b207A562E4294a',
  },
  '1088': {
    // Metis
    poolAddressesProvider: '0xB9FABd7500B2C6781c35Dd48d54f81fc2299D7AF',
    poolAddressesProviderRegistry: '0x9E7B73ffD9D2026F3ff4212c29E209E09C8A91F5',
    pool: '0x90df02551bB792286e8D4f13E0e357b4Bf1D6a57',
    aclManager: '0xcDCb65fc657B701a5100a12eFB663978E7e8fFB8',
    poolConfigurator: '0x69FEE8F261E004453BE0800BC9039717528645A6',
    incentives: '0x30C1b8F0490fa0908863d6Cbd2E36400b4310A6B',
    poolDataProvider: '0xC01372469A17b6716A38F00c277533917B6859c0',
    uiIncentiveDataProviderV3: '0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034',
    uiPoolDataProviderV3: '0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16',
    walletBalanceProvider: '0x1df710eb1E2FD9C21494aF2BFb1F210a4185885b',
    aaveOracle: '0x38D36e85E47eA6ff0d18B0adF12E5fC8984A6f8e',
    treasury: '0xB5b64c7E00374e766272f8B442Cd261412D4b118',
    l2Encoder: '0x9f3A1B399A9074eBA63Dc4fc274bE2A2b2d80cB9',
  },
  '8453': {
    // Base
    poolAddressesProvider: '0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D',
    poolAddressesProviderRegistry: '0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2',
    pool: '0xA238Dd80C259a72e81d7e4664a9801593F98d1c5',
  },
  '100': {
    // Gnosis
    poolAddressesProvider: '0x36616cf17557639614c1cdDb356b1B83fc0B2132',
    poolAddressesProviderRegistry: '0x1236010CECea55998384e795B59815D871f5f94d',
    pool: '0xb50201558B00496A145fE76f7424749556E326D8',
  },
  '56': {
    // BNB
    poolAddressesProvider: '0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D',
    poolAddressesProviderRegistry: '0x117684358D990E42Eb1649E7e8C4691951dc1E71',
    pool: '0x6807dc923806fE8Fd134338EABCA509979a7e0cB',
  },
  '534352': {
    // Scroll
    poolAddressesProvider: '0x69850D0B276776781C063771b161bd8894BCdD04',
    poolAddressesProviderRegistry: '0xFBedc64AeE24921cb43004312B9eF367a4162b57',
    pool: '0x11fCfe756c05AD438e312a7fd934381537D3cFfe',
  },
  '324': {
    // zksync
    poolAddressesProvider: '0x2A3948BB219D6B2Fa83D64100006391a96bE6cb7',
    poolAddressesProviderRegistry: '0x0753E3637ddC6efc40759D9c347251046644F25F',
    pool: '0x78e30497a3c7527d953c6B1E3541b021A98Ac43c',
  },
  // Add more networks as needed
};
