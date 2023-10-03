import { cookies } from "next/headers";
import TopTracks from "@/components/top-tracks";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function TopTracksPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("spotifyToken");

  if (!token) {
    return (
      <div className="container flex justify-center mt-32 md:mt-8">
        <Button className="md:w-1/5 py-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner text-xl">
          <Link href="/api/login">Log in to see your stats</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container flex flex-col mt-28 md:mt-0 md:w-3/4 text-center h-screen text-white">
      <div className="text-center md:text-start mt-4 ">
        <h1 className="text-lg md:text-2xl text-lime-300 font-medium">
          Your Top Tracks from the past{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-purple-400 via-30% to-emerald-500 font-semibold drop-shadow-lg shadow-inner">
            4 weeks
          </span>
        </h1>
      </div>
      <TopTracks token={token.value} />
    </div>
  );
}

export default TopTracksPage;
