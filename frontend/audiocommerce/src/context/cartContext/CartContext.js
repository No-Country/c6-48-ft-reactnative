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
    };

    const removeProductToCart = (id) =>{

        dispatch({
            type:'removeProduct',
            payload: {
                id
            }
        })
    }

    const addProductToCart = ( product, amount )=>{
        dispatch({
            type:'addProductToCart',
            payload:{
                product,
                amount
            }
        })
    }

    const changeAmountItems = (id, newAmount )=>{

        dispatch({
            type: 'changeAmount',
            payload:{
                id,
                amount: newAmount
            }
        })

    }

    const removeAllItems = ()=>{
        dispatch({
            type: 'removeAll'
        })
    }

    return(
        <CartContext.Provider
            value={{
                cartState,
                setShowCart,
                addProductToCart,
                removeProductToCart,
                changeAmountItems,
                removeAllItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}