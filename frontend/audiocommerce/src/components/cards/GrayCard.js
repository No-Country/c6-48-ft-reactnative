import React, { useContext } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../buttons/ButtonSeeProduct'

export const GrayCard = ({ product, navigation }) => {


    const { addProductDetails } = useContext(ProductContext);

    return (
        <View
            style={{
                alignItems: 'center',
                marginVertical: 20,
                overflow: 'hidden'
            }}
        >

            <View
                style={{
                    width: themeApp.widthStd,
                    height: themeApp.heightStd * 0.6,
                    backgroundColor: '#dcdcdc',
                    borderRadius: 10,
                    // overflow: 'hidden',
                    justifyContent: 'center',
                    // paddingHorizontal: 10

                }}
            >
                <ImageBackground
                    source={ require('../../assets/img/otros/gray-textile-background.jpg')}
                    resizeMode= 'cover'
                    style={{
                        flex: 1
                    }}
                >

                <Image
                    source={{
                        uri: product.img
                    }}
                    style={{
                        resizeMode: 'center',
                        width: themeApp.widthStd *0.45,
                        height: themeApp.widthStd *0.45,
                        position: 'absolute',
                        right: -30,
                        top: (themeApp.heightStd * 0.6) / 4,
                        zIndex: 10,
                        borderColor: 'red',
                        borderWidth: 2
                    }}
                />

                <View style={{
                    borderWidth: 2,
                    borderColor: 'green',
                    width: themeApp.widthStd * 0.6
                }}>
                    <Text style={[themeApp.titleStd, { textAlign: 'left', color: themeApp.colorBlack, marginBottom: 40 }]}>{product.title}</Text>
                    <ButtonSeeProduct
                        onPress={() => {
                            navigation.navigate('ProductoScreen')
                            addProductDetails(product)
                        }}
                        textStyle={{ color: themeApp.colorBlack }}
                        containerStyle={{ borderWidth: 2, borderColor: themeApp.colorBlack, backgroundColor: 'transparent' }}
                    />

                </View>
                </ImageBackground>
            </View>
        </View>
    )
}
