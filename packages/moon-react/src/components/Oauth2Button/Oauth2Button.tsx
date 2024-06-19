import getEnvVariables from "../../utils/getEnvVariables";

function Oauth2Button() {
  const handleClick = () => {
    const env = getEnvVariables();
    if (!env) return;
    const redirectUrl = `https://dash.usemoon.ai/authorize?response_type=${env.responseType}&client_id=${env.clientId}&redirect_uri=${env.redirectUri}&scope=${env.scope}&state=${env.state}`;

    window.location.href = redirectUrl;
  };

  return (
    <button
      onClick={handleClick}
      className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    >
      Login with Moon
    </button>
  );
}

export default Oauth2Button;
