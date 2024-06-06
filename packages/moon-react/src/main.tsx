import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoonSDKProvider } from './context/Context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MoonSDKProvider>
      <App />
    </MoonSDKProvider>
  </React.StrictMode>
);
