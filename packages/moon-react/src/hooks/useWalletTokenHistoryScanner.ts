// // import { transactionHistoryManager } from '@/utils/TransactionHistoryManager';
// import { useQuery } from '@tanstack/react-query';

// export const useWalletTokenHistoryScanner = () => {
//   const context = useMoonSDK();
//   const { handleTransaction } = useMoonTransaction();
//   const { moon } = context;

//   const {
//     data: ERC20Transfers,
//     isFetching: fetchingERC20Transactions,
//     error: ERC20Transactions,
//   } = useQuery({
//     queryKey: ['ERC20TransfersHistory', walletAddressIn, chain?.chainId || ''],
//     queryFn: async () => {
//       if (
//         !walletAddressIn ||
//         !chain?.chainId ||
//         !chain.blockExplorer ||
//         walletAddress == ''
//       ) {
//         console.log(
//           'useWalletTokens:debug transactions no data',
//           walletAddressIn,
//           chain?.chainId
//         );
//         return [];
//       }
//       console.log(
//         'useWalletTokens:debug transactions',
//         walletAddressIn,
//         chain?.chainId
//       );
//       let tx = (await localForage.getItem(txERC20CacheKey)) as
//         | BlockExplorerERC20Transfer[]
//         | null;
//       if (!tx) {
//         tx = await transactionHistoryManager.getERC20TransfersForAddressOnChain(
//           walletAddress,
//           chain.chainId
//         );
//         localForage.setItem(txERC20CacheKey, tx);
//       }
//       console.log('useWalletTokens:debug transactions result', tx);
//       return tx;
//     },
//     retry: true,
//     retryDelay: 5000,
//   });

//   const getTokenHistory = useCallback(
//     async (payload: {
//       accountName: string;
//       transaction: InputBody;
//     }): Promise<Transaction> => {
//       return handleTransaction('getTokenHistory', async () => {
//         const tokenHistoryScannerSDK = getTokenHistoryScannerSDK();
//         const response = await tokenHistoryScannerSDK.getTokenHistory(
//           payload.accountName,
//           payload.transaction
//         );
//         return response.data;
//       });
//     },
//     [moon]
//   );

//   return {
//     getTokenHistory,
//   };
// };
