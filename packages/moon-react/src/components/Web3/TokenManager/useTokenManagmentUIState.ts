import { useMoonSDK } from '@/hooks';
import {
  CG_TokenListItem as TokenListItemType,
  useTokenInfo,
} from '@/utils/react-coinghecko';
import { useEffect, useState } from 'react';
import { UserToken } from './types';

export const useTokenManagmentUIState = (
  tokenList: TokenListItemType[] | undefined
) => {
  const { chains } = useMoonSDK();
  const [tokenInfoModalCGID, setTokenInfoModalCGID] = useState<string>('');
  const [isEditingExistingToken, setIsEditingExistingToken] = useState(true);

  const [cgToken, setCgToken] = useState<string>('');
  const [newToken, setNewToken] = useState<UserToken>({
    type: 'erc20',
    name: '',
    symbol: '',
    coinGeckoId: '',
    decimals: 0,
    address: '',
    chainId: 1,
    icon: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autocompleteOptions, setAutocompleteOptions] = useState<
    TokenListItemType[]
  >([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [platforms, setPlatforms] = useState<{ [key: string]: string }>({});
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [contextMenuOpen, setContextMenuOpen] = useState<string | null>(null);

  const { data: tokenInfo } = useTokenInfo(newToken.coinGeckoId || '');

  useEffect(() => {
    if (cgToken && tokenList) {
      const filteredOptions = tokenList.filter((token: TokenListItemType) =>
        token.id.toLowerCase().includes(cgToken.toLowerCase())
      );
      setAutocompleteOptions(filteredOptions);
      setShowAutocomplete(true);
    } else {
      setShowAutocomplete(false);
    }
  }, [cgToken, tokenList]);

  useEffect(() => {
    if (tokenInfo) {
      setNewToken((prevToken) => ({
        ...prevToken,
        name: tokenInfo.name,
        symbol: tokenInfo.symbol,
        icon: tokenInfo.image.small,
        address: Object.values(tokenInfo.platforms)[0],
      }));
      setPlatforms(tokenInfo.platforms);
    }
  }, [tokenInfo]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleAutocompleteChange = (value: string) => setCgToken(value);

  const handleAutocompleteSelect = (token: TokenListItemType) => {
    setNewToken({
      ...newToken,
      coinGeckoId: token.id,
      name: token.name,
      symbol: token.symbol,
    });
    setShowAutocomplete(false);
  };

  const handlePlatformChange = (chainName: string) => {
    const chain = chains.find((chain) =>
      chain.name?.toLocaleLowerCase().includes(chainName.toLocaleLowerCase())
    );
    setNewToken((prevToken) => ({
      ...prevToken,
      chainId: chain?.chain_id || 1,
      address: platforms[chainName],
    }));
    setSelectedPlatform(platforms[chainName]);
  };

  const toggleContextMenu = (address: string) => {
    setContextMenuOpen((prev) => (prev === address ? null : address));
  };

  return {
    tokenInfoModalCGID,
    setTokenInfoModalCGID,
    cgToken,
    setCgToken,
    newToken,
    setNewToken,
    isModalOpen,
    autocompleteOptions,
    showAutocomplete,
    platforms,
    selectedPlatform,
    contextMenuOpen,
    toggleModal,
    handleAutocompleteChange,
    handleAutocompleteSelect,
    handlePlatformChange,
    toggleContextMenu,
    setIsEditingExistingToken,
    isEditingExistingToken,
  };
};
