


export const cartReducer =(state, action)=>{

    switch (action.type) {
        case 'showCart':
            return {
                ...state,
                showCart: action.payload
            }
    
        default:
            return {
                ...state
            }
    }

}