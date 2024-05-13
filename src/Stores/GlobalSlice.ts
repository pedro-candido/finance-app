import { StateCreator } from "zustand";
import { IGlobalSlice } from "./types";

export const createGlobalSlice: StateCreator<IGlobalSlice> = (set) => ({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => set(() => ({ isUserLoggedIn: true })),
});
