import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Callback from './pages/callback';
import ChatGPT from './pages/chatgpt';
import { CodeEditorPage } from './pages/contract';
import Ethers from './pages/ethers';
import Login from './pages/login';
import OAuth2 from './pages/oauth2';
import Signup from './pages/signup';
import Siwe from './pages/siwe';
import Whisper from './pages/whisper';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/callback" Component={Callback} />
        <Route path="/chatgpt" Component={ChatGPT} />
        <Route path="/ethers" Component={Ethers} />
        <Route path="/login" Component={Login} />
        <Route path="/oauth2" Component={OAuth2} />
        <Route path="/signup" Component={Signup} />
        <Route path="/siwe" Component={Siwe} />
        <Route path="/whisper" Component={Whisper} />
        <Route path="/" Component={App} />
        <Route path="/contract" Component={CodeEditorPage} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
