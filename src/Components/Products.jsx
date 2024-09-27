import React, { useEffect } from 'react'
import useApiStore from '../App/apiStore'

const Products = () => {
    // 2 ways to fetch the state and actions
    // 1.
    // const products = useApiStore(state => state.products);
    // const fetchProducts = useApiStore(state => state.fetchProducts);
    //2. 
    const { products, fetchProducts } = useApiStore();

    console.log("products data here ---->>>", products);

    useEffect(
        () => {
            fetchProducts();
        }
      , [fetchProducts]);
  
  return (
    <div>
      Hello world
    </div>
  )
}

export default Products
