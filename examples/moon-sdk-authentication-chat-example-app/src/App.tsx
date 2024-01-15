import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
        <Link to="/callback">
          <button>Callback</button>
        </Link>
        <Link to="/chatgpt">
          <button>ChatGPT</button>
        </Link>
        <Link to="/ethers">
          <button>Ethers</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/oauth2">
          <button>OAuth2</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/siwe">
          <button>Siwe</button>
        </Link>
        <Link to="/whisper">
          <button>Whisper</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/contract">
          <button>Contract</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
