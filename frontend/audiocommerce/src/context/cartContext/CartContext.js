import React, { createContext, useReducer } from "react";
import { apiDB } from "../../api/apiDb";
import { cartReducer } from "./cartReducer";




export const CartContext = createContext({});


export const CartProvider = ({ children })=>{

    const [ cartState , dispatch] = useReducer(cartReducer, {
        products:[],
    });

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

    const createOrder = async ( userData )=>{


        const { eMoneyNumber, eMoneyPin, paymentMethod, ...rest } = userData;

        if( paymentMethod === 'cash'){
            
            const order = {
                ...rest,
                paymentMethod,
                cart: cartState.products.map( item =>{
                    return {
                        item: item._id,
                        amount: item.amount
                    }
                })
            }
            // const order = JSON.stringify(orderData);
            console.log(order)
            try {
                
                const {data} = await apiDB.post('/orders', order );
    
                console.log('data cash', JSON.stringify(data, null, 2))
            } catch (error) {
    
                console.log('error', JSON.stringify(error.response, null, 2))
            }
        } else {


            const order = {
                ...userData,
                cart: cartState.products.map( item =>{
                    return {
                        item: item._id,
                        amount: item.amount
                    }
                })
            }
            // const order = JSON.stringify(orderData);
            console.log('order', JSON.stringify(order, null, 2))
            try {
                
                const { data } = await apiDB.post('/orders', order );
    
                console.log('data', JSON.stringify(data, null, 2))
            } catch (error) {
    
                console.log('error', JSON.stringify(error.response.data.error, null, 2))
            }
        }



    }
    return(
        <CartContext.Provider
            value={{
                cartState,
                addProductToCart,
                removeProductToCart,
                changeAmountItems,
                removeAllItems,
                createOrder
            }}
        >
            {children}
        </CartContext.Provider>
    )
}