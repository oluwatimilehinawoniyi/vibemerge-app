export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    throw new Error("No refresh token found");
  }

  const response = await fetch(import.meta.env.VITE_TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: import.meta.env.VITE_CLIENT_ID,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    return data.access_token;
  } else {
    throw new Error("Failed to refresh access token");
  }
};

export const getValidAccessToken = async (): Promise<string | null> => {
  let accessToken = localStorage.getItem("access_token");

  const expiryTime = parseInt(localStorage.getItem("expiry_time") || "0");

  if (Date.now() >= expiryTime) {
    try {
      accessToken = await refreshAccessToken();

      if (accessToken) {
        return accessToken;
      }
    } catch (error) {
      console.error("Failed to refresh access token", error);
      return null;
    }
  }
  return accessToken;
};

export const checkTokenValidity = async () => {
  const expiryTime = parseInt(
    localStorage.getItem("access_token_expiry") || "0",
    10
  );

  if (Date.now() >= expiryTime) {
    try {
      await refreshAccessToken();
    } catch (error) {
      console.error("Failed to refresh token", error);
    }
  }
};
