


export const productReducer = (state, action) => {

    switch (action.type) {
        case 'addProducts':
            return {
                ...state,
                products: action.payload
            }

        default:
            return {
                ...state
            }
    }

}