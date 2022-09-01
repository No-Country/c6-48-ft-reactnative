import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../../context/cartContext/CartContext';
import { convertToCurrency } from '../../helpers/converToCurrency'
import { themeApp } from '../../themeApp/themeApp'

export const ModalItem = ({ product }) => {

    const { removeProductToCart, changeAmountItems, setShowCart, cartState } = useContext(CartContext);

    const [counter, setCounter] = useState(product.amount);

    const {width, height} = useWindowDimensions();
    useEffect(() => {
        changeAmountItems(product._id, counter)
    }, [counter])

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
            {/* Item image */}
            <View style={{ width: width*.2, height: width*.2, maxWidth: 100, maxHeight: 100, backgroundColor: themeApp.colorSecundary, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                {/* button to remove item */}
                <TouchableOpacity
                    style={style.buttonRemoveItem}
                    onPress={() => {
                        removeProductToCart(product._id);
                    }}
                >
                    <Icon name='trash-outline' color='red' size={25} />
                </TouchableOpacity>
                <Image
                    source={{ uri: product.img }}
                    style={{ width: width*.15, height: width*.15,maxWidth: 80, maxHeight: 80, resizeMode: 'contain', borderRadius: 5 }}
                />

            </View>

            {/* Item price and title */}

            <View style={{
                width: width *.33,
                maxWidth: 155,
                paddingHorizontal: 15,

            }}>
                <Text
                    style={{ color: themeApp.colorBlack, fontSize: 20 }}
                    adjustsFontSizeToFit
                    numberOfLines={2}
                >{product.title}</Text>
                <Text
                    style={{
                        color: themeApp.colorGrayDark,
                        fontSize: 15
                    }}
                >{convertToCurrency(product.price)}</Text>

            </View>


            {/* buttons to add or subtract items*/}

            <View style={{ flexDirection: 'row', flex: 1, height: 40}}>

                <TouchableOpacity
                    onPress={() => setCounter(prev => prev - 1)}
                    style={style.counterButtos}
                    disabled={counter <= 1}
                >
                    <Text>-</Text>
                </TouchableOpacity>

                <View
                    style={style.counterButtos}
                >
                    <Text>{counter}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => setCounter(prev => prev + 1)}
                    style={style.counterButtos}
                >
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    counterButtos: {
        backgroundColor: themeApp.colorSecundary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRemoveItem: {
        backgroundColor: 'white',
        position: 'absolute',
        top: -10,
        right: -10,
        zIndex: 10,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5,
        padding: 2
    }
})
