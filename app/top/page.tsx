import { cookies } from "next/headers";
import TopTracks from "@/components/top-tracks";

function TopTracksPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("spotifyToken");

  if (!token) {
    return (
      <div className="container w-full text-center">
        TopTracksPage
        <a href="/api/login">Login</a>
      </div>
    );
  }

  return (
    <div className="container w-full text-center">
      TopTracksPage
      <TopTracks token={token.value} />
    </div>
  );
}

export default TopTracksPage;
