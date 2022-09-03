const { convertToCurrency } = require("./converToCurrency");


const createEmailHtml = (order) => {


    const items = order.cart.map(({ item, amount }) => {
        return `
                <li style="display: flex; justify-content: space-evenly; align-items: center; margin: 20px 0;">
                                <img src=${item.img}
                                    alt="audiocommerce" style="width: 80px; margin-right: 20px">
                                <div style="justify-content: center; align-items: center; margin-right: 20px">
                                    <h4 style="color: black; margin-left: 10px; margin: 0;">${item.title}</h4>
                                    <h6 style="color: black; margin: 0;">$${item.price}</h6>
                                </div>
                                <div style="margin: 20px;">
                                    <h3 style="color: black;">X${amount}</h3>
                                </div>
                            </li>
                `
    }).join();

    console.log(toString(order.eMoneyNumber).length)

    const numberCartHide= order.eMoneyNumber.map( ( number, index ) =>{

        if( index < order.eMoneyNumber.length/2 ){
            return number
        } else {
            return '*'
        }
    }).join('');



    return `
        <div style="width: 100%; max-width: 700px; background-color: #f5f5f5; align-items: center;  padding: 20px;">
            <div style="width: 80%; background-color: white; padding: 30px; border-radius: 10px; margin: auto;">
                <h1 style="color: black; ">Thank you ${order.name} for your order</h1>
                <h3>Your data:</h3>
                <ul style="list-style: none;">
                    <li>📱 Phone number: ${order.phoneNumber} </li>
                    <li>🏠 Address: ${order.address} </li>
                    <li>📬 Zip code: ${order.zipCode} </li>
                    <li>🗺 Country: ${order.country} </li>
                    <li>🏙 City: ${order.city} </li>
                    <li>💵 Payment method: ${order.paymentMethod} </li>
                    ${ (order.paymentMethod === 'creditCard') ? (`<li>💳 Cart number: ${numberCartHide}</li>`) : null }
                </ul>
                <h3>Your cart:</h3>
                <div style="width: 80%;  max-width: 300px; background-color: #f1f1f1; border-radius: 10px; padding-top: 20px;">
                    <ul style="color: white; list-style: none; padding: 0px 40px; ">
                    ${items}
                    </ul>
                    <div style="background-color: black; color: white; padding: 20px; border-radius: 0 0 10px 10px;">
                        <div style="display: flex;">
                            <h4 style="margin: 0;margin-right: auto; color: white">TOTAL</h4>
                            <h4 style="margin: 0;">${convertToCurrency(order.total)}</h4>
                        </div>
                        <div style="display: flex;">
                            <h4 style="margin: 0;margin-right: auto; color: white">SHIPPING</h4>
                            <h4 style="margin: 0;">${convertToCurrency(order.shipping)}</h4>
                        </div>
                        <div style="display: flex;">
                            <h4 style="margin: 0;margin-right: auto; color: white">VAT</h4>
                            <h4 style="margin: 0;">${convertToCurrency(order.vat)}</h4>
                        </div>
                        <div style="display: flex;">
                            <h4 style="margin: 0;margin-right: auto; color: white">GRAND TOTAL</h4>
                            <h4 style="margin: 0;">${convertToCurrency(order.grandTotal)}</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>`


}

module.exports = {
    createEmailHtml
}