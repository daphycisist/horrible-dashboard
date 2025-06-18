import { create } from "zustand";
export const useStore = create(() => ({ count: 0, data: [] }));
