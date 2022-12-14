import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp'
import { ButtonSeeProduct } from '../buttons/ButtonSeeProduct'

export const ProductCard = ({ product, navigation, screenDetails }) => {

    const {width} = useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', width, maxWidth: themeApp.widthStd }}>

                <TouchableOpacity style={[{ width: width*.9},styles.containerImage]}
                    onPress={()=>  navigation.navigate(screenDetails, { product }) }
                >

                    <Image
                        source={{uri: product.img}}
                        style={[{ width: width*.7, height: width*.7},styles.image]}
                    />
                    <Image
                        source={require('../../assets/img/otros/sombra.png')}
                        style={styles.sombra}
                    />
                </TouchableOpacity>
                <View style={styles.center}>
                    {
                        product.isNewProduct && <Text style={styles.isNewProduct}>NEW PRODUCT</Text>
                    }
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={[styles.title, styles.category,{marginTop:0}]}>{product.category}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <ButtonSeeProduct onPress={() => {
                    navigation.navigate(screenDetails, { product })
                }}
                    backgroundColor={themeApp.colorPrimary}
                    containerStyle={{marginTop: 15}}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    containerImage: {
        backgroundColor: '#f1f1f1',
        maxWidth: 430,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 500
    },
    image: {
		resizeMode: 'contain',
		maxWidth: 350,
		maxHeight: 350
	},
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    isNewProduct: {
        color: '#d87d4a',
        fontSize: 30,
        marginTop: 20
    },
    title: {
        fontSize: 48,
        color: '#000',
        marginTop: 20
    },
    category:{
        textTransform: 'uppercase'
    },
    button: {
        backgroundColor: '#d87d4a',
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginVertical: 20
    },
    textButton: {
        fontSize: 25,
        color: '#fff'
    },
    description: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        paddingHorizontal: 20
    },
    sombra: {
        // width: 220,
        resizeMode: 'contain',
        position: 'absolute',
        // zIndex: 1,
        // top: -20,
        bottom: -30
    }
})
