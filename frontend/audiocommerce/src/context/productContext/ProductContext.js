import React, { createContext } from "react";


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
    addProductCart: ()=>void,
    removeProductCart: ()=>void,
}


*/

export const ProductContext = createContext({});

//proveer el estado

export const ProductProvider = ({ children }) => {


    const value = {
        products:{},
        cart: [],

    }

    return (
        <ProductContext.Provider value={ value }>
            {children}
        </ProductContext.Provider>

    )
}