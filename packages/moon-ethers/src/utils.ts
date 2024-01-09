import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import { utils } from 'ethers';

export interface TypedData {
  domain: TypedDataDomain;
  types: Record<string, Array<TypedDataField>>;
  value: Record<string, string>;
}

export const getMessage = (params: string[]) => {
  const message = params.filter((p) => !utils.isAddress(p))[0];
  const hash = new Uint8Array(arrayify(hashMessage(message)));
  return hash;
};

export const getSignTypedDataParamsData = (params: string[]) => {
  const data = params.filter((p) => !utils.isAddress(p))[0];

  if (typeof data === 'string') {
    return JSON.parse(data) as TypedData;
  }

  return data;
};
