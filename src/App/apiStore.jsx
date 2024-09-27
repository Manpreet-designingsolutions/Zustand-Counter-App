import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// persist api to store data in local storage, session storage etc.

const useApiStore = create(persist(
    (set) => (
        {
            products: [],
            fetchProducts: async () => {
                try {
                    const response = await fetch("https://fakestoreapi.com/products");
                    const data = await response.json();
                    set({products:data});
                } catch (error) {
                    console.log(error);
                }
            }
        }
    ),
    //options to provide with the persist
    {
        name: 'productsData',
        // if you want to save in another storages 
        // by default it store in local storage
        storage: createJSONStorage(() => sessionStorage)
    }
));


export default useApiStore;