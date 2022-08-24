


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
            }
        case 'addErrorMsg':
            return {
                ...state,
                errorMsg: action.payload
            }
        case 'removeError':
            return {
                ...state,
                errorMsg: ''
            }
        case 'setLoading':
            return {
                ...state,
                isLoading: action.payload
            }


        default:
            return {
                ...state
            }
    }

}