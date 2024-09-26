import { useEffect } from "react";
import { useNavigate } from "react-router";
import { checkTokenValidity } from "./functions/refreshToken";
import redirectToSpotifyLogin from "./functions/redirect";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      await checkTokenValidity();

      const accessToken = localStorage.getItem("access_token");
      const expiryTime = localStorage.getItem("access_token_expiry");

      if (accessToken && Date.now() < parseInt(expiryTime || "0", 10)) {
        navigate("/dashboard");
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogin = () => {
    redirectToSpotifyLogin();
  };

  return (
    <div>
      <h1 className="">welcome to VibeMerge</h1>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
