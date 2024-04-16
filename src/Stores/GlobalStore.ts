import { create } from "zustand";

interface IGlobalStore {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
}

export const useGlobalStore = create<IGlobalStore>()((set) => ({
  isUserLoggedIn: false,
  setIsUserLoggedIn: (isUserLoggedIn) => set({ isUserLoggedIn }),
}));
