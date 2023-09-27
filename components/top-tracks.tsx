"use client";
import { useGetTopTracks } from "@/lib/hooks/useGetTopTracks";

function TopTracks({ token }: { token: string }) {
  const { data, error, isLoading } = useGetTopTracks(token);
  return <div>{isLoading && <div>Loading...</div>}</div>;
}

export default TopTracks;
