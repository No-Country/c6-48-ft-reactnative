import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeApp } from '../../themeApp/themeApp';
import { ModalCart } from '../modals/ModalCart';
import { CartContext } from '../../context/cartContext/CartContext';

export const HeaderApp = ({ navigation }) => {


    const { cartState } = useContext(CartContext);

    const [showCart, setShowCart] = useState(false)

    return (
        <View
            style={styles.headerContainer}>
            <View style={styles.containerMenuButton}>
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name='menu-outline' size={30} color={themeApp.colorWhite} />
                </TouchableOpacity>
            </View>
            <View
                style={styles.containerHeader}
            >

                <Text
                    style={styles.headerText}
                >AudioCommerce</Text>
            </View>
            <View style={styles.containerHomeCart} >

                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <Icon name='home-outline' size={26} color={themeApp.colorWhite} />
                </TouchableOpacity>


                {

                    (cartState.products.length >= 1) && (<TouchableOpacity
                        onPress={() => setShowCart(true)}
                    >
                        <View style={styles.containerNumberItems}><Text style={styles.textNumberItems}>{cartState.products.length}</Text></View>
                        <Icon name='cart-outline' size={30} color={themeApp.colorWhite} />
                    </TouchableOpacity>)

                }
            </View>
            <ModalCart show={showCart} setShowCart={setShowCart} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: themeApp.colorBlack,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerHeader: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        paddingTop: 8,
        fontWeight: '300'
    },
    containerMenuButton: {
        flex: 1,
        paddingLeft: 10
    },
    containerHomeCart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 100,
        marginLeft: 0,
        paddingRight: 10
    },
    containerNumberItems: {
        position: 'absolute',
        top: -17,
        right: 3,
        // backgroundColor: 'white',
        width: 22,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor:'red'
    },
    textNumberItems: { color: 'red', fontWeight: 'bold' }
})