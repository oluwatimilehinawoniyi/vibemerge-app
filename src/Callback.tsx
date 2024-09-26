import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const getCode = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        const codeVerifier = localStorage.getItem("code_verifier");

        const response = await fetch(import.meta.env.VITE_TOKEN_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: import.meta.env.VITE_REDIRECT_URI,
            client_id: import.meta.env.VITE_CLIENT_ID,
            code_verifier: codeVerifier ?? "",
          }),
        });

        const data = await response.json();

        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);

          const expiresIn = data.expires_in;
          const expirationTime = Date.now() + expiresIn * 1000;
          localStorage.setItem(
            "access_token_expiry",
            expirationTime.toString()
          );

          navigate("/dashboard");
        }
      }
    };

    getCode();
  }, [navigate]);

  return <div>loading...</div>;
}
