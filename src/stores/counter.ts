import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCounterStore = create<State & Actions>()(
  // immer 不可变
  // https://docs.pmnd.rs/zustand/integrations/immer-middleware
  // persist 持久化
  // https://docs.pmnd.rs/zustand/integrations/persisting-store-data
  immer(
    persist(
      (set, get) => ({
        count: 0,
        increment: () => set({count: get().count + 1}),
        decrement: () => set(state => state.count--)
      }),
      {
        // name of item in the storage (must be unique)
        name: 'counter',
        // (optional) by default the 'localStorage' is used
        storage: createJSONStorage(() => localStorage),
        partialize: state => ({count: state.count})
      }
    )
  )
);
