"use client";
import ArtistCard from "./cards/artist-card";
import { useAtom } from "jotai";
import { searchDataAtom } from "@/lib/atoms/atoms";

function ArtistCardGrid() {
  const [searchResults] = useAtom(searchDataAtom);

  if (!searchResults || !searchResults.tracks) return <></>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <ArtistCard />
    </div>
  );
}

export default ArtistCardGrid;
