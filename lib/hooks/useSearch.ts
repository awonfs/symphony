import { Track, Artist, Album } from "../types/types";
import { useQuery } from "react-query";
import axios from "axios";

interface SearchResponse {
  tracks: { items: Track[] };
  albums: { items: Album[] };
  artists: { items: Artist[] };
}

const searchType = "track";

export function useSearch(
  token: string,
  query: string,
  market?: string,
  limit: number = 10,
  offset: number = 0
) {
  const axiosInstance = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  return useQuery<SearchResponse, Error>(
    ["search", query, searchType, market, limit, offset],
    async () => {
      if (!query) throw new Error("No search query provided");
      try {
        const { data } = await axiosInstance.get<SearchResponse>("search", {
          params: {
            q: query,
            type: searchType,
            market: market,
            limit: limit,
            offset: offset,
          },
          headers: { Authorization: `Bearer ${token}` },
        });
        return data;
      } catch (error) {
        console.error("Error fetching search results:", error);
        throw error;
      }
    },
    {
      enabled: !!query,
    }
  );
}
