


export const cartReducer = (state, action) => {

    switch (action.type) {
        case 'addProductToCart':
            const product = action.payload.product;
            return {
                ...state,
                products: [...state.products, {
                    title: product.title,
                    _id: product._id,
                    img: product.img,
                    price: product.price,
                    amount: action.payload.amount
                }]
            }
        case 'removeProduct':
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload.id)
            }
        case 'changeAmount':
            return {
                ...state,
                products: state.products.map(product => {
                    if (product._id === action.payload.id) {
                        return {
                            ...product,
                            amount: action.payload.amount
                        }
                    } else {
                        return {
                            ...product
                        }
                    }
                })
            }
        case 'removeAll':
            return {
                ...state,
                products: []
            }
        case 'setShowOrderCreated':
            return {
                ...state,
                showOrderCreated: action.payload
            }
        default:
            return {
                ...state
            }
    }

}