// FILEPATH: /home/ewhal4/go/src/github.com/moon-up/sdks/moon-sdk/packages/viem/test/viem.test.ts
import {
  LocalAccount,
  MoonSDK,
  SignableMessage,
  TransactionSerializable,
  TypedDataDefinition,
} from ''; // import necessary types
import { createMoonAccount } from '../src/viem';

jest.mock('...'); // path to the module where MoonSDK is defined

describe('createMoonAccount', () => {
  let mockSdk: jest.Mocked<MoonSDK>;
  let ethereumAddress: string;
  let input: { sdk: MoonSDK; ethereumAddress: string };

  beforeEach(() => {
    mockSdk = new MoonSDK() as jest.Mocked<MoonSDK>;
    ethereumAddress = '0x123';
    input = { sdk: mockSdk, ethereumAddress };
  });

  it('should create a moon account', async () => {
    const account = await createMoonAccount(input);
    expect(account).toBeInstanceOf(LocalAccount);
  });

  it('should sign a message', async () => {
    const message: SignableMessage = 'message';
    mockSdk.SignMessage.mockResolvedValue('0xsignedMessage');

    const account = await createMoonAccount(input);
    const signedMessage = await account.signMessage({ message });

    expect(signedMessage).toBe('0xsignedMessage');
    expect(mockSdk.SignMessage).toHaveBeenCalledWith(ethereumAddress, message);
  });

  it('should sign a transaction', async () => {
    const transaction: TransactionSerializable = {
      /* transaction data */
    };
    mockSdk.SignTransaction.mockResolvedValue('0xsignedTransaction');

    const account = await createMoonAccount(input);
    const signedTransaction = await account.signTransaction(transaction);

    expect(signedTransaction).toBe('0xsignedTransaction');
    expect(mockSdk.SignTransaction).toHaveBeenCalledWith(
      ethereumAddress,
      transaction
    );
  });

  it('should sign typed data', async () => {
    const typedData: TypedDataDefinition = {
      /* typed data */
    };
    mockSdk.SignTypedData.mockResolvedValue('0xsignedTypedData');

    const account = await createMoonAccount(input);
    const signedTypedData = await account.signTypedData(typedData);

    expect(signedTypedData).toBe('0xsignedTypedData');
    expect(mockSdk.SignTypedData).toHaveBeenCalledWith(
      ethereumAddress,
      typedData.domain,
      typedData.types,
      typedData.message
    );
  });
});
