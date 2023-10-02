import { atom } from "jotai";
import { SpotifyData } from "@/lib/types/types";

export const searchDataAtom = atom<SpotifyData | null>(null);
