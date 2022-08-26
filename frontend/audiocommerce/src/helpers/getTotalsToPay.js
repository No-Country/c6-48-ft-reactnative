



export const getTotalsToPay = ( products ) => {
   
    if(products.length > 0){
        
        let totals = 0;
    
        for (const product of products) {
            totals = totals + (product.price * product.amount);
        }
    
        return totals
    }else {
        return 0;
    }
}
