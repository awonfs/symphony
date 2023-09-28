import { cookies } from "next/headers";
import TopTracks from "@/components/top-tracks";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

function TopTracksPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("spotifyToken");

  if (!token) {
    return (
      <div className="container w-full text-center">
        TopTracksPage
        <Link href="/api/login">Login to see your stats</Link>
      </div>
    );
  }

  return (
    <div className="container flex flex-col w-3/4 text-center h-screen text-white">
      <div className="flex items-center justify-between text-start mt-4">
        <h1 className="text-2xl text-lime-500 font-medium">
          Your Top Tracks from the past{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-purple-400 via-30% to-emerald-500 font-semibold drop-shadow-lg shadow-inner">
            4 weeks
          </span>
        </h1>
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>
      <TopTracks token={token.value} />
    </div>
  );
}

export default TopTracksPage;
