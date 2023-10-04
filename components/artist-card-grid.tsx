"use client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { searchDataAtom } from "@/lib/atoms/atoms";
import ArtistCard from "./cards/artist-card";

const ArtistCardGrid: React.FC = () => {
  const [searchResults] = useAtom(searchDataAtom);

  useEffect(() => {
    console.log("Search results changed:", searchResults);
  }, [searchResults]);

  if (!searchResults || !searchResults.tracks) return <></>;

  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
      {searchResults.tracks.items.map((track) => (
        <ArtistCard
          key={track.id}
          imageUrl={track.album.images[0]?.url || ""}
          songName={track.name}
          artistName={track.artists.map((artist) => artist.name).join(", ")}
          albumName={track.album.name}
          songLink={track.external_urls.spotify}
        />
      ))}
    </div>
  );
};

export default ArtistCardGrid;
