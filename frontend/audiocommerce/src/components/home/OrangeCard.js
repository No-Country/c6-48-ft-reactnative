import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../buttons/ButtonSeeProduct'
import { ImageCirc } from '../images/ImageCirc'

export const OrangeCard = ({ product, navigation }) => {
console.log(JSON.stringify(product,null,6))

    const { addProductDetails } = useContext(ProductContext);

    return (
        <View style={{
            alignItems: 'center',
            marginVertical: 20,
        }}>

            <View style={{
                width: themeApp.widthStd,
                height: themeApp.heightStd,
                backgroundColor: themeApp.colorPrimary,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 25,
                overflow: 'hidden'
            }}>
                <ImageCirc img={ product.img }/>

                <Text style={[themeApp.titleStd, { color: 'white'}]}>{product.title}</Text>
                <Text style={[themeApp.titleStd, { color: 'white', marginBottom:20 }]}>{product.category}</Text>
                <Text style={[themeApp.descriptionStd, { color: 'white', marginBottom: 20 }]}>{product.description}</Text>
                <ButtonSeeProduct
                    onPress={() => {
                        navigation.navigate('ProductoScreen')
                        addProductDetails(product)
                    }} 
                    backgroundColor={themeApp.colorBlack}
                />

            </View>
        </View>
    )
}
