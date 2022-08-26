


export const cartReducer =(state, action)=>{

    switch (action.type) {
        case 'showCart':
            return {
                ...state,
                showCart: action.payload
            }
        case 'addProductToCart':
            const product = action.payload.product;
            return {
                ...state,
                products: [...state.products,{
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
                products: state.products.filter( product => product._id !== action.payload.id)
            }
        case 'changeAmount':
            return {
                ...state,
                products: state.products.map( product =>{
                    if( product._id === action.payload.id ){
                        return {
                            ...product,
                            amount: action.payload.amount
                        }
                    }else {
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
    
        default:
            return {
                ...state
            }
    }

}