// creating the store here

import { create } from "zustand";

const useCounterStore = create(
    (set) => (
        {
            count: 1,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: ()=>set((state)=>({count: state.count-1}))
        }
    )
);

export default useCounterStore;