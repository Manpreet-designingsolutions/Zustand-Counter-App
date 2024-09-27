// creating the store here

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCounterStore = create(persist(
    (set, get) => (
        {
            count: 0,
            currentData: null,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            currentValue: () => {
                const { count } = get();
                set({currentData:count});
            },
            reset: () => set({ count : 0, currentData:0 })

        }
    ),
    {
        // unique name given as key to the object to get stored in the storage
        name: 'counterData',

        // storage: createJSONStorage(() => sessionStorage),

        //  partialize is used to include only particular keys into the storage

        // state is basically the object here taken as argument in the arrow function 
        // object.entries convert the object in the each key value into the individual array and as a whole array too
        // now filter method filters the array based on the condition that count should not be included in the array
        // object.fromEntries again convert the filtered array into the object

        partialize: (state) =>
            Object.fromEntries(
                Object.entries(state).filter(([key]) => !['count'].includes(key))
            )
    }
)
);


export default useCounterStore;