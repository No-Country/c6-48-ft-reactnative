import React, { useContext } from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '..';
import { ProductContext } from '../../context/productContext/ProductContext';
import { useNavigation } from '@react-navigation/native';

export const BlackCard = React.memo(({ product, screenDetails }) => {

    const navigation = useNavigation();
    
    const {width} = useWindowDimensions();

    return (

        <View style={{ height: themeApp.heightStd, backgroundColor: themeApp.colorBlack, justifyContent: 'center', alignItems: 'center' }}>
            {
                !!product.img && (<Image
                    source={{ uri: product.img }}
                    style={{ width, height: width, maxHeight: 500, maxWidth: 500, resizeMode: 'contain', opacity: 0.4 }}
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
                    navigation.navigate(screenDetails, { product })
                }} 
                    backgroundColor={themeApp.colorPrimary}
                />

            </View>

        </View>
    )
})
