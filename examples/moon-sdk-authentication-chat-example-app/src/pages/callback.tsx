import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMoonSDK } from '../hooks/moon';

function OAuth2Callback() {
  const location = useLocation();
  const { moon } = useMoonSDK();

  useEffect(() => {
    async function fetchData() {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await fetch(`http://localhost:4000/callback?code=${code}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          console.log(data);
          moon?.setAccessToken(data.access_token, data.refresh_token);
        } catch (error) {
          // Handle the error here
          console.error(error);
        }
      }
    }

    fetchData();
  }, [location]);

  return <div>Processing OAuth2 callback...</div>;
}

export default OAuth2Callback;
