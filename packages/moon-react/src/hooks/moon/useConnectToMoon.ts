import { useAuth } from '@/hooks';
import { SiweMessage } from 'siwe';

export interface ConnectToMoonProps {
  address: string;
  signMessageAsync: any;
}

export const useConnectToMoon = ({
  address,
  signMessageAsync,
}: ConnectToMoonProps) => {
  // wagmi get chainId

  const { verifySIWESignature, getSIWENonce } = useAuth();

  const connectToMoonSiwe = async () => {
    if (!address) return;

    try {
      const nonce = await getSIWENonce(address);
      if (!nonce) return;
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: 1,
        nonce: nonce,
      });
      const signedMessage = await signMessageAsync({
        message: message.prepareMessage(),
      });

      const session = await verifySIWESignature(
        address,
        signedMessage,
        nonce,
        message
      );
      if (!session) return;
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  return { connectToMoonSiwe };
};
