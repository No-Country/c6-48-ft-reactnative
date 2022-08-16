import React, { createContext, useReducer } from "react";
import { data } from "../../api/data";
import { productReducer } from "./productReducer";


/* definir que informacion tendra el context

{
    products: { productos }
    cart: [
        {
            product: string,
            id: string,
            price: number,
            quantity: number,
            subTotal: number
        },
    ],
    addProducts: ()=>void,
    addProductCart: (id)=>void,
    removeProductCart: (id)=>void,
}


*/
// crear el context

export const ProductContext = createContext({});

//proveer el estado

export const ProductProvider = ({ children }) => {

    const [productState, dispatch] = useReducer( productReducer,{
        products:[],
        cart:[]
    })

    const addProducts = ()=>{
        dispatch({type:'addProducts', payload: data})
    }

    const addProductCart = (id)=>{

        dispatch({
            type:'addProductCart', 
            payload:{
                id
            }

        })
    }

    const value = {
        productState,
        addProducts,
        addProductCart,
    }

    return (
        <ProductContext.Provider value={ value }>
            {children}
        </ProductContext.Provider>

    )
}