import { createCodeChallenge } from "./CodeVerifier";

const redirectToSpotifyLogin = async () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;
  const scope = import.meta.env.VITE_SCOPE;

  const codeChallenge = await createCodeChallenge();

  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&code_challenge_method=S256&code_challenge=${codeChallenge}`;

  window.location.href = authUrl;
};

export default redirectToSpotifyLogin;
