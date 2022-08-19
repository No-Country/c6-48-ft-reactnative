import React, { createContext, useReducer } from "react";
import { apiDB } from "../../api/apiDb";
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
        productDetails:{},
        errorMsg:''
    })

    const addProducts = ( data )=>{
        dispatch({type:'addProducts', payload: data })
    }

    const addProductCart = (id)=>{

        dispatch({
            type:'addProductCart', 
            payload:{
                id
            }

        })
    }

    const addProductDetails = ( product )=>{
        dispatch({
            type:'addProductDetails',
            payload: product
        })
    }

    const createProduct = async( product )=>{

        const body = JSON.stringify(product);

        try {
            const { data } = await apiDB.post('/productos', body, {
                "headers": {
    
                    "content-type": "application/json",
                    
                    },
            })
            return true;
        } catch (error) {
            console.log(JSON.stringify(error.response.data.errors, null , 4))
            dispatch({
                type: 'addErrorMsg',
                payload: error.response.data.errors[0].msg
            })
        }
    }

    const removeError = ()=>{
        dispatch({
            type: 'removeError'
        })
    }

    const value = {
        productState,
        addProducts,
        addProductCart,
        addProductDetails,
        createProduct,
        removeError
    }

    return (
        <ProductContext.Provider value={ value }>
            {children}
        </ProductContext.Provider>

    )
}