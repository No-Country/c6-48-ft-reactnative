import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../';
import { ProductContext } from '../../context/productContext/ProductContext';

export const NewProduct = ({ product, navigation }) => {

    const { addProductDetails } = useContext(ProductContext);

    return (

        <View style={{ height: themeApp.heightStd, backgroundColor: themeApp.colorBlack, justifyContent: 'center', alignItems: 'center' }}>
            {
                !!product.img && (<Image
                    source={{ uri: product.img }}
                    style={{ width: 500, height: 500, resizeMode: 'contain', opacity: 0.4 }}
                />)
            }

            <View
                style={{ position: 'absolute', paddingHorizontal: 25, justifyContent: 'center', alignItems: 'center' }}
            >

                {
                    product.isNewProduct && <Text style={{ color: '#c6c6c6', textAlign: 'center', fontSize: 20, marginBottom: 25, letterSpacing: 20 }}>NEW PRODUCT</Text>
                }

                <Text
                    style={ [themeApp.titleStd, {color: 'white'}] }
                >{product.title}</Text>

                <Text
                    style={{ color: 'white', fontSize: 40, textAlign: 'center', marginBottom: 25, textTransform: 'uppercase' }}
                >{product.category}</Text>

                <Text
                    style={{ color: '#c6c6c6', textAlign: 'center', fontSize: 20, marginBottom: 25 }}
                >
                    {product.description}
                </Text>

                <ButtonSeeProduct onPress={() => {
                    navigation.navigate('ProductoScreen')
                    addProductDetails(product)
                }} 
                    backgroundColor={themeApp.colorPrimary}
                />

            </View>

        </View>
    )
}
