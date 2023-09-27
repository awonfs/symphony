"use client";
import { useTopTracks } from "@/hooks/useTopTracks";
import { cookies } from "next/headers";

interface Track {
  id: string;
  name: string;
}

const TopTracksPage = () => {
  const cookieStore = cookies();
  const spotifyToken = cookieStore.get("spotifyToken");
  const {
    data: topTracks,
    isLoading,
    isError,
  } = useTopTracks(spotifyToken?.value!!);

  if (isLoading) return "Loading...";
  if (isError || !topTracks) return "An error occurred";

  return (
    <div>
      {topTracks.map((track: Track) => (
        <div key={track.id}>{track.name}</div>
      ))}
    </div>
  );
};

export default TopTracksPage;
