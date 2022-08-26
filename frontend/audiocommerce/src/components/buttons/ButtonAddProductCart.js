import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CartContext } from '../../context/cartContext/CartContext'
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp'

export const ButtonAddProductCart = ({ product }) => {


    const { cartState, addProductToCart, changeAmountItems } = useContext(CartContext);

    const [isInCart, setIsInCart] = useState()

    const thisProductIsInCart = ()=>{

        const productsCart = cartState.products;

        return productsCart.some( product => product._id === productState.productDetails._id )

    }

    const { productState } = useContext(ProductContext);

    const [counter, setCounter] = useState(1);
    
    useEffect(() => {
        thisProductIsInCart()
    }, [])
    

    useEffect(() => {
        setCounter(1)
    }, [productState.productDetails])
    
  return (
    
    <View
        style={{
            height: 70,
            flexDirection: 'row'
        }}
    >
        <View style={{
            flexDirection:'row',
            flex: 1,
            backgroundColor: themeApp.colorSecundary,
            marginHorizontal: 5
        }}>
            {/* counter */}
            <TouchableOpacity
                style={ style.sectionCounter}
                disabled={ ( counter <=1 )}
                onPress={()=> setCounter( prev=> prev - 1)}
            >
                <Text style={ style.textCounter }>-</Text>
            </TouchableOpacity>

            <View style={ style.sectionCounter}>
            <Text style={ [style.textCounter,{ color: 'black'} ]}>{counter}</Text>
            </View>

            <TouchableOpacity
                style={ style.sectionCounter}
                onPress={()=> setCounter( prev=> prev + 1)}
            >
                <Text style={ style.textCounter }>+</Text>
            </TouchableOpacity>
        </View>


        <View style={{
            flex: 1,
            marginHorizontal: 5

        }}>
            {/* button add to cart */}
            <TouchableOpacity
                style={ style.buttonAddToCart}
                onPress={()=> addProductToCart( product , counter ) }
            >
                <Text style={style.textAddToCart}>
                    ADD TO CART
                </Text>
            </TouchableOpacity>
        </View>


    </View>
  )
}


const style = StyleSheet.create({
    sectionCounter:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center'
    },
    buttonAddToCart:{
        flex:1,
        backgroundColor: themeApp.colorPrimary,
        justifyContent:'center',
        alignItems:'center'
    },
    textCounter:{
        fontSize: 20,
        color: '#b5b5b5'
    },
    textAddToCart:{
        fontSize: 18,
        color: themeApp.colorWhite,
        fontWeight: '500'
    }
})