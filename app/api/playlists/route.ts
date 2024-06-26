import { getPlaylists } from "../../lib/spotify";

export async function GET(request: Request) {
  const response = await getPlaylists();
  const data = await response.json();

  return Response.json({ data });
}
