import { getValidAccessToken } from "../functions/refreshToken";

const fetchUserProfile = async () => {
  const accessToken = getValidAccessToken();

  if (!accessToken) {
    alert("Session expired and unsuccessfully refreshed. Please log in again.");

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    window.location.href = "/";
    return;
  }

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  console.log("user profile: ", data);
  return data;
};

export { fetchUserProfile };
