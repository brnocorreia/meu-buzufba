import { atomWithStorage } from "jotai/utils";
import { LocalStorageKeys } from "@/constants/local-storage-keys";
import { User } from "@/@types/user";

export const userAtom = atomWithStorage<User | null>(
  LocalStorageKeys.USER,
  null
);
