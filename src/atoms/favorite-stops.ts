import { atomWithStorage } from "jotai/utils";
import { LocalStorageKeys } from "@/constants/local-storage-keys";

export const favoriteStopsAtom = atomWithStorage<string[]>(
  LocalStorageKeys.FAVORITE_STOPS,
  []
);
