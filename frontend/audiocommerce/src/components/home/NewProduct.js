import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../buttons/ButtonSeeProduct'

export const NewProduct = ({ product }) => {

    console.log(JSON.stringify(product, null, 6))
    return (

        <View style={{ height: 600, backgroundColor: themeApp.colorBlack, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={{ uri: product.img }}
                style={{ width: 500, height: 500, resizeMode: 'contain', opacity: 0.4 }}
            />
            <View
                style={{ position: 'absolute', marginHorizontal: 25,justifyContent:'center', alignItems:'center' }}
            >
                {
                    product.isNewProduct && <Text style={{ color: '#c6c6c6', textAlign: 'center', fontSize: 25, marginBottom: 25, letterSpacing: 10 }}>NEW PRODUCT</Text>
                }
                <Text
                    style={{ color: 'white', fontSize: 40, textAlign: 'center', marginBottom: 25 }}
                >{product.title}</Text>
                <Text
                    style={{ color: '#c6c6c6', textAlign: 'center', fontSize: 20, marginBottom: 25 }}
                >
                    {product.description}
                </Text>

                <ButtonSeeProduct />
            </View>

        </View>
    )
}
