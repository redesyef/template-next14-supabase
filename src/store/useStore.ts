import { create } from 'zustand';

type Store = {
  isAdd: boolean;
  setIsAdd: (value: boolean) => void;
};

const useStore = create<Store>()((set) => ({
  isAdd: false,
  setIsAdd: (value) => set(() => ({ isAdd: value })),
}));

export default useStore;
