import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../';
import { ProductContext } from '../../context/productContext/ProductContext';

export const NewProduct = ({ product, navigation }) => {

    const {addProductDetails} = useContext(ProductContext);

    return (

        <View style={{ height: 700, backgroundColor: themeApp.colorBlack, justifyContent: 'center', alignItems: 'center' }}>
            {
                !!product.img && (<Image
                    source={{ uri: product.img }}
                    style={{ width: 500, height: 500, resizeMode: 'contain', opacity: 0.4 }}
                />)
            }

            <View
                style={{ position: 'absolute', marginHorizontal: 25, justifyContent: 'center', alignItems: 'center' }}
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

                <ButtonSeeProduct onPress={() => {
                    navigation.navigate('ProductoScreen')
                    addProductDetails(product)
                    }} />
            </View>

        </View>
    )
}
