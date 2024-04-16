import { create } from "zustand";

interface IUnloggedStore {
  name: string;
  setName: (name: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const useUnloggedStore = create<IUnloggedStore>()((set) => ({
  name: "",
  setName: (name) => set({ name }),
  password: "",
  setPassword: (password) => set({ password }),
}));
