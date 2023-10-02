export interface Artist {
  name: string;
}
export interface Track {
  id: string;
  name: string;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  album: Album;
  artists: Artist[];
  available_markets: string[];
  external_ids: { [key: string]: string };
  external_urls: { spotify: string };
  href: string;
  is_local: boolean;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  id: string;
  name: string;
  album_type: string;
  href: string;
  artists: Artist[];
}

export interface SpotifyData {
  tracks: {
    items: Track[];
  };
}
