import { useQuery } from "react-query";
import axios from "axios";
import { Track } from "../types/types";

interface TopTracksResponse {
  items: Track[];
}

export function useGetTopTracks(token: string) {
  const axiosInstance = axios.create({
    baseURL: "https://api.spotify.com/",
  });
  return useQuery<TopTracksResponse, Error>("topTracks", async () => {
    try {
      const { data } = await axiosInstance.get<TopTracksResponse>(
        "v1/me/top/tracks?time_range=short_term&limit=5",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching top tracks:", error.message);
        if (axios.isAxiosError(error) && error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        }
        throw error;
      } else {
        console.error("An unknown error occurred while fetching top tracks");
        throw new Error("An unknown error occurred");
      }
    }
  });
}
