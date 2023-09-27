export interface Artist {
  name: string;
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
}
