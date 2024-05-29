// // WebViewPage.tsx

import React from 'react';

// import { Accounts, ContentType, HttpClient } from '@moonup/moon-api';
// import { useRoute } from '@react-navigation/native';
// import React, { useEffect, useRef, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { WebView } from 'react-native-webview';
export const WebViewPage: React.FC = () => {
  return <></>;
};

// import { INJECTED_PROVIDER as _INJECTED_PROVIDER } from '../assets/js/injection';
// import { useMoon } from '../contexts/useMoonContext';
// import { MoonProvider } from '../lib/ethers';
// import { supabase } from '../lib/supabase';
// // import { INJECTED_PROVIDER as _INJECTED_PROVIDER } from '../../assets/js/injection';
// // import { MoonProvider } from '../../lib/ethers';
// // import { supabase } from '../../lib/supabase';

// export const WebViewPage: React.FC = () => {
//   const webViewRef = useRef(null);
//   const route = useRoute();
//   const { session } = useMoon();
//   console.log('route', route);
//   const { url } = route.params;

//   const [wallets, setWallets] = useState<any[]>([]);
//   const provider = new MoonProvider({
//     chainId: 10,
//     address: '0x8d097570E71172aF63F3539dEf286D1e70793FF8',
//     supabase: supabase,
//   });

//   const http = new HttpClient({
//     baseUrl: 'https://beta.usemoon.ai',
//     baseApiParams: {
//       secure: true,
//       type: ContentType.Json,
//       format: 'json',
//     },
//     securityWorker: async (securityData: any) => {
//       return Promise.resolve({
//         headers: {
//           Authorization: `Bearer ${securityData.token}`,
//         },
//       });
//     },
//   });
//   const accounts = new Accounts(http);

//   useEffect(() => {
//     const fetchAccounts = async () => {
//       console.log('fetching accounts');
//       http.setSecurityData({
//         token: session?.access_token,
//       });

//       const { data } = await accounts.listAccounts();
//       console.log(data?.data.keys);
//       setWallets((value) => [data?.data.keys]);
//     };
//     const createEthers = async () => {};
//     fetchAccounts();
//     createEthers();
//   }, [session]);

//   const handleNavigationChange = (navState) => {
//     // Handle URL changes here
//     console.log('WebView navigated to: ' + navState.url);
//   };

//   const onMessage = async (data) => {
//     // console.log('onMessage data', data);
//     // if (data.type === 'history-state-changed') return;
//     console.log('provider', provider);
//     console.log('data', data);
//     const result = await provider.request(data);
//     const jsonString = JSON.stringify({
//       type: data.type,
//       result: result,
//       jsonrpc: '2.0',
//       id: data.id,
//     });
//     console.log(jsonString);
//     // injectJS(jsonString);
//     webViewRef.current.postMessage(jsonString);
//   };

//   return (
//     <View style={styles.container}>
//       <WebView
//         ref={webViewRef}
//         webviewDebuggingEnabled={true}
//         source={{ uri: url }}
//         onMessage={(e) => {
//           const data = JSON.parse(e.nativeEvent.data);
//           console.log('data', data);
//           onMessage(data);
//         }}
//         injectedJavaScriptBeforeContentLoaded={_INJECTED_PROVIDER}
//         onNavigationStateChange={handleNavigationChange}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
