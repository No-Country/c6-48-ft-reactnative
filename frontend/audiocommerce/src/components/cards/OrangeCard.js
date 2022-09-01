import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../buttons/ButtonSeeProduct'
import { ImageCirc } from '../images/ImageCirc'

export const OrangeCard = React.memo(({ product, screenDetails }) => {

    const navigation = useNavigation();
    const {width} = useWindowDimensions();

    const { addProductDetails } = useContext(ProductContext);

    return (
        <View style={{
            alignItems: 'center',
            marginVertical: 20,
        }}>

            <View style={{
                width: width*0.9,
                maxWidth: themeApp.widthStd,
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
                        navigation.navigate(screenDetails, { product })
                    }} 
                    containerStyle={{ backgroundColor: themeApp.colorBlack}}
                />

            </View>
        </View>
    )
}
)