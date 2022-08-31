const convertToCurrency = ( value )=>{
    if(typeof value === "number"){
        return value.toLocaleString( 'en-US', {style:'currency', currency:'USD',minimumFractionDigits: 2, maximumFractionDigits: 2});
    }else {
        return 0;
    }


}

module.exports = {
    convertToCurrency
}