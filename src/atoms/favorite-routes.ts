import { atomWithStorage } from "jotai/utils";
import { LocalStorageKeys } from "@/constants/local-storage-keys";

export const favoriteRoutesAtom = atomWithStorage<string[]>(
  LocalStorageKeys.FAVORITE_ROUTES,
  []
);
