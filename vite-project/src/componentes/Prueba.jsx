import React from 'react'
import Prueba2 from './Prueba2'
import './Cards.css'
import { ShoppingInitialState, shoppingReducer } from "./ShoppingReducer";
import { useReducer } from "react";

const Prueba = ({ data }) => {
    const [state, dispatch] = useReducer(
        shoppingReducer,
        ShoppingInitialState
    )

    const { products, cart } = state;

    const addToCart = (id) => {
        console.log(id);
    };

    const delFromCart = () => {};
    
    const clearCart = () => {};


      return (
    <>
        {data.length > 0 ? (
                data.map(product => (
                    <Prueba2
                        key={product.id}
                        product={product}
                        url= {product.url}
                        name={product.name}
                        price={product.price}
                        addToCart={addToCart}
                    />
                ))
            ) : (
                
                    <p>Sin datos</p>
                
            )}
    </>
      )}

export default Prueba