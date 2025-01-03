import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
  Makefuntoken,
  MakeFunTokenGetClFactoryParams,
  MakeFunTokenGetMaxTickParams,
  MakeFunTokenGetMinTickParams,
  MakeFunTokenHelperInputBody,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
  useAccount,
  useChainId,
  useSendTransaction,
  useSwitchChain,
} from "wagmi";

/**
 * Custom hook that provides functionalities related to the MakeFun token using the Moon SDK.
 *
 * @returns {Object} An object containing various methods for interacting with MakeFun tokens.
 */
export const useMakeFun = () => {
  const { handleTransaction } = useMoonTransaction();
  const { moon } = useMoonAuth();
  const { isConnected, address } = useAccount();
  const { sendTransactionAsync } = useSendTransaction();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const prepareTransaction = (
    account: string,
    transaction: MakeFunTokenHelperInputBody
  ) => {
    if ( isConnected && address === account ) {
      return {
        ...transaction,
        broadcast: false,
        dryrun: true,
      };
    }
    return transaction;
  };

  const handleWagmiTransaction = async ( transactionData: any ) => {
    try {
      if ( isConnected && address === transactionData.transaction.from ) {
        if ( chainId !== Number.parseInt( transactionData.transaction.chainId ) ) {
          await switchChain( {
            chainId: Number.parseInt( transactionData.transaction.chainId ),
          } );
        }
        await sendTransactionAsync( {
          to: transactionData.transaction.to,
          data: transactionData.transaction.data,
          value: BigInt( transactionData.transaction.value ),
          chainId: Number.parseInt( transactionData.transaction.chain_id ),
        } );
      }
    } catch ( error ) {
      console.error( "handleWagmiTransaction: Error: ", error );
      return transactionData;
    }
  };

  const getMakeFunTokenSDK = useCallback( (): Makefuntoken => {
    const makeFunTokenSDK = moon?.getMakeFunTokenSDK();
    if ( !makeFunTokenSDK ) throw new Error( "Moon MakeFunTokenSDK not initialized" );
    return makeFunTokenSDK;
  }, [ moon ] );

  const getClFactory = useCallback(
    async ( params: MakeFunTokenGetClFactoryParams ) => {
      const makeFunTokenSDK = getMakeFunTokenSDK();
      return makeFunTokenSDK.makeFunTokenGetClFactory( params );
    },
    [ moon ]
  );

  const getMaxTick = useCallback(
    async ( params: MakeFunTokenGetMaxTickParams ) => {
      const makeFunTokenSDK = getMakeFunTokenSDK();
      return makeFunTokenSDK.makeFunTokenGetMaxTick( params );
    },
    [ moon ]
  );

  const getMinTick = useCallback(
    async ( params: MakeFunTokenGetMinTickParams ) => {
      const makeFunTokenSDK = getMakeFunTokenSDK();
      return makeFunTokenSDK.makeFunTokenGetMinTick( params );
    },
    [ moon ]
  );

  const makeToken = useCallback(
    async ( payload: { address: string; data: MakeFunTokenHelperInputBody; } ) => {
      return handleTransaction( "makeToken", async () => {
        const makeFunTokenSDK = getMakeFunTokenSDK();
        const preparedData = prepareTransaction( payload.address, payload.data );

        const response = await makeFunTokenSDK.makeFunTokenMakeToken(
          payload.address,
          preparedData as MakeFunTokenHelperInputBody
        );
        return handleWagmiTransaction( response );
      } );
    },
    [ moon ]
  );

  const setSupplyLimits = useCallback(
    async ( payload: { address: string; data: MakeFunTokenHelperInputBody; } ) => {
      return handleTransaction( "setSupplyLimits", async () => {
        const makeFunTokenSDK = getMakeFunTokenSDK();
        const preparedData = prepareTransaction( payload.address, payload.data );

        const response = await makeFunTokenSDK.makeFunTokenSetSupplyLimits(
          payload.address,
          preparedData as MakeFunTokenHelperInputBody
        );
        return handleWagmiTransaction( response );
      } );
    },
    [ moon ]
  );

  const setTickLimits = useCallback(
    async ( payload: { address: string; data: MakeFunTokenHelperInputBody; } ) => {
      return handleTransaction( "setTickLimits", async () => {
        const makeFunTokenSDK = getMakeFunTokenSDK();
        const preparedData = prepareTransaction( payload.address, payload.data );

        const response = await makeFunTokenSDK.makeFunTokenSetTickLimits(
          payload.address,
          preparedData as MakeFunTokenHelperInputBody
        );
        return handleWagmiTransaction( response );
      } );
    },
    [ moon ]
  );

  return {
    getClFactory,
    getMaxTick,
    getMinTick,
    makeToken,
    setSupplyLimits,
    setTickLimits,
  };
};