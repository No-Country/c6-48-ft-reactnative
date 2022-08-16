import React, { createContext, useReducer } from "react";
// import { data } from "../../api/data";
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
    category: '',
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
        cart:[],
        category:''
    })

    const addProducts = ( data, category )=>{
        dispatch({type:'addProducts', payload: {
            data,
            category
        }})
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