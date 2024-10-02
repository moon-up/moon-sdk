// import { Bitcoincash, BitcoinCashTransactionInput } from '@moonup/moon-api';
// import { useCallback } from 'react';
// import { useMoonSDK } from './useMoonSDK';
// import { useMoonTransaction } from './useMoonTransaction';

// export const useMoonBitcoinCash = () => {
//   const context = useMoonSDK();
//   const { handleTransaction } = useMoonTransaction();
//   const { moon } = context;

//   const getBitcoinCashSDK = (): Bitcoincash => {
//     const bitcoinCashSDK = moon?.getBitcoincashSDK();
//     if (!bitcoinCashSDK) throw new Error('Moon SDK not initialized');
//     return bitcoinCashSDK;
//   };

//   const listBitcoinCashAccounts = useCallback(async () => {
//     return handleTransaction('listBitcoinCashAccounts', async () => {
//       const bitcoinCashSDK = getBitcoinCashSDK();
//       const response = await bitcoinCashSDK.listBitcoinCashAccounts();
//       return response.data;
//     });
//   }, [moon]);

//   const createBitcoinCashAccount = useCallback(async () => {
//     return handleTransaction('createBitcoinCashAccount', async () => {
//       const bitcoinCashSDK = getBitcoinCashSDK();
//       const response = await bitcoinCashSDK.createBitcoinCashAccount({});
//       return response.data;
//     });
//   }, [moon]);

//   const getBitcoinCashAccount = useCallback(
//     async (payload: { accountName: string }) => {
//       return handleTransaction('getBitcoinCashAccount', async () => {
//         const bitcoinCashSDK = getBitcoinCashSDK();
//         const response = await bitcoinCashSDK.getBitcoinCashAccount(
//           payload.accountName
//         );
//         return response.data;
//       });
//     },
//     [moon]
//   );

//   const signBitcoinCashTransaction = useCallback(
//     async (payload: {
//       accountName: string;
//       transaction: {
//         to: string;
//         amount: string;
//         fee: string;
//         data: string;
//       };
//     }) => {
//       return handleTransaction('signBitcoinCashTransaction', async () => {
//         const bitcoinCashSDK = getBitcoinCashSDK();
//         const response = await bitcoinCashSDK.signBitcoinCashTransaction(
//           payload.accountName,
//           payload.transaction as BitcoinCashTransactionInput
//         );
//         return response.data;
//       });
//     },
//     [moon]
//   );

//   return {
//     listBitcoinCashAccounts,
//     createBitcoinCashAccount,
//     getBitcoinCashAccount,
//     signBitcoinCashTransaction,
//   };
// };
