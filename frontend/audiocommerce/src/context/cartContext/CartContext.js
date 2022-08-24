import React, { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";




export const CartContext = createContext({});


export const CartProvider = ({ children })=>{

    const [ cartState , dispatch] = useReducer(cartReducer, {
        showCart: false,
        products:[],
    });

    const setShowCart = (show)=>{
        dispatch({
            type: 'showCart',
            payload: show
        })
    }

    return(
        <CartContext.Provider
            value={{
                cartState,
                setShowCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}