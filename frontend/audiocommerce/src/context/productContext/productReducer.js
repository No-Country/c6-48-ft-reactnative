


export const productReducer = (state, action) => {

    switch (action.type) {
        case 'addProducts':
            return {
                ...state,
                products: action.payload,
            }
        case 'addProductDetails':
            return {
                ...state,
                productDetails: action.payload,
            }
        case 'addProductCart':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    state.products.map((product) => {

                        if(product.id === action.payload.id){
                            return {
                                product: product.title,
                                id: product.id,
                                price: product.price,
                                quantity: 1,
                            }
                        } else return undefined;

                    })
                ]
            }


        default:
            return {
                ...state
            }
    }

}