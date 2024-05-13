import { create } from "zustand";
import { createGlobalSlice } from "./GlobalSlice";
import { IGlobalSlice } from "./types";

export const useBoundStore = create<IGlobalSlice>()((...a) => ({
  ...createGlobalSlice(...a),
}));
