import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../buttons/ButtonSeeProduct'

export const GrayCard = React.memo(({ product, screenDetails }) => {

    const navigation = useNavigation();

    const { addProductDetails } = useContext(ProductContext);
    const {width} = useWindowDimensions();
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
                    width: width*.9,
                    maxWidth: themeApp.widthStd,
                    height: themeApp.heightStd * 0.6,
                    borderColor: '#dcdcdc',
                    borderRadius: 10,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    borderWidth: 2,


                }}
            >
                <Image 
                    source={require('../../assets/img/otros/sound-background.jpg')}
                    style={{
                        position: 'absolute'
                    }}
                />
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
                        // borderColor: 'red',
                        // borderWidth: 2
                    }}
                />

                <View style={{
                    // borderWidth: 2,
                    // borderColor: 'green',
                    width: themeApp.widthStd * 0.6,
                    paddingLeft: 20
                }}>
                    <Text 
                        style={[themeApp.titleStd, { 
                            textAlign: 'left', 
                            color: themeApp.colorBlack, 
                            marginBottom: 40, 
                            backgroundColor:'white', 
                            borderRadius: 10 
                        }]}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        >{product.title}</Text>
                    <ButtonSeeProduct
                        onPress={() => {
                            navigation.navigate(screenDetails, { product })

                        }}
                        textStyle={{ color: themeApp.colorBlack }}
                        containerStyle={{ borderWidth: 2, borderColor: themeApp.colorBlack, backgroundColor: 'white' }}
                    />

                </View>
            </View>
        </View>
    )
})
