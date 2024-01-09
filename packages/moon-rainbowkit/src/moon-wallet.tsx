import { MoonProviderOptions } from '@moonup/ethers';
import { MoonConnector } from '@moonup/wagmi-connector';
import { Wallet } from '@rainbow-me/rainbowkit';
import { Chain, Connector } from 'wagmi';

export interface MyWalletOptions {
  chains: Chain[];
  options: MoonProviderOptions;
}
const name = 'Moon';
const iconUrl =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkzIiBoZWlnaHQ9IjczIiB2aWV3Qm94PSIwIDAgMjkzIDczIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMEgxMi40Mzg3SDMwLjk1ODVINDMuMzk3MUg2Mi4xOTM0SDc0LjYzMTlWMTMuOTMzOFY2OS42Njk0SDYyLjE5MzRWMTMuOTMzOEg0My4zOTcxVjY5LjY2OTRIMzAuOTU4NVYxMy45MzM4SDEyLjQzODdWNjkuNjY5NEgwVjEzLjkzMzhWMFpNMjkzIDY5LjY2OTRWMTMuOTMzOFYwSDI4MC41NjFIMjU1LjY4NEgyNDMuMjQ1VjEzLjkzMzhWNjkuNjY5NEgyNTUuNjg0VjEzLjkzMzhIMjgwLjU2MVY2OS42Njk0SDI5M1pNMTE5Ljk2NCA3Mi40NTYxQzEzOS44MSA3Mi40NTYxIDE1NS44OTggNTYuMjM2MiAxNTUuODk4IDM2LjIyOEMxNTUuODk4IDE2LjIxOTkgMTM5LjgxIDAgMTE5Ljk2NCAwQzEwMC4xMTggMCA4NC4wMzAxIDE2LjIxOTkgODQuMDMwMSAzNi4yMjhDODQuMDMwMSA1Ni4yMzYyIDEwMC4xMTggNzIuNDU2MSAxMTkuOTY0IDcyLjQ1NjFaTTExOS45NjQgNTguNTIyQzEwNy43NTEgNTguNTIyIDk3Ljg1MSA0OC41NDA2IDk3Ljg1MSAzNi4yMjhDOTcuODUxIDIzLjkxNTMgMTA3Ljc1MSAxMy45MzM4IDExOS45NjQgMTMuOTMzOEMxMzIuMTc3IDEzLjkzMzggMTQyLjA3NyAyMy45MTUzIDE0Mi4wNzcgMzYuMjI4QzE0Mi4wNzcgNDguNTQwNiAxMzIuMTc3IDU4LjUyMiAxMTkuOTY0IDU4LjUyMlpNMjMzLjg0NyAzNi4yMjhDMjMzLjg0NyA1Ni4yMzYyIDIxNy43NTkgNzIuNDU2MSAxOTcuOTEzIDcyLjQ1NjFDMTc4LjA2NyA3Mi40NTYxIDE2MS45NzkgNTYuMjM2MiAxNjEuOTc5IDM2LjIyOEMxNjEuOTc5IDE2LjIxOTkgMTc4LjA2NyAwIDE5Ny45MTMgMEMyMTcuNzU5IDAgMjMzLjg0NyAxNi4yMTk5IDIzMy44NDcgMzYuMjI4Wk0xNzUuOCAzNi4yMjhDMTc1LjggNDguNTQwNiAxODUuNyA1OC41MjIgMTk3LjkxMyA1OC41MjJDMjEwLjEyNiA1OC41MjIgMjIwLjAyNiA0OC41NDA2IDIyMC4wMjYgMzYuMjI4QzIyMC4wMjYgMjMuOTE1MyAyMTAuMTI2IDEzLjkzMzggMTk3LjkxMyAxMy45MzM4QzE4NS43IDEzLjkzMzggMTc1LjggMjMuOTE1MyAxNzUuOCAzNi4yMjhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K';

export const rainbowkitUseMoonConnector = ({
  chains,
  options,
}: MyWalletOptions): Wallet => {
  return {
    id: 'usemoonAuth',
    name,
    iconUrl,
    iconBackground: '#fff',
    createConnector: () => {
      const connector = new MoonConnector({
        chains,
        options,
      }) as Connector;

      return {
        connector,
        mobile: {
          getUri: async () => {
            try {
              await connector.connect();
              return window.location.href;
            } catch (e) {
              console.error('Failed to connect');
            }
            return '';
          },
        },
        desktop: {
          getUri: async () => {
            try {
              await connector.connect();
            } catch (e) {
              console.error('Failed to connect');
            }
            return '';
          },
        },
      };
    },
  };
};
