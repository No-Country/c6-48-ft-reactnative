export const convertToCurrency = ( value )=>{
    if(typeof value === "number"){
        return value.toLocaleString( 'en-US', {style:'currency', currency:'USD',minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
}