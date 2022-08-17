import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { ImageIcon } from '../';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeApp } from '../../themeApp/themeApp';

export const DrawerContent = ({ navigation }) => {

    const state = navigation.getState();

    return (
        <DrawerContentScrollView>

            <View style={{ paddingBottom: 50 }}>
                {
                    state.routes.map(({ key, name }) => {

                        if (name === 'Checkout') return null;
                        if (name === 'Home') return null;
                        if (name === 'ProductoScreen') return null;

                        let iconUrl;

                        switch (name) {
                            case 'Headphones':
                                iconUrl = require('../../assets/img/menu/menu-headphone.png');
                                break;
                            case 'Speakers':
                                iconUrl = require('../../assets/img/menu/menu-speakers.png');
                                break;
                            case 'Earphones':
                                iconUrl = require('../../assets/img/menu/menu-earphones.png');
                                break;
                            default:
                                iconUrl = require('../../assets/img/menu/menu-headphone.png')
                                break;
                        }

                        return (
                            <View key={key} style={styles.container}>

                                <ImageIcon iconUrl={iconUrl} />

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(name) }}
                                    style={styles.containerTouchable}
                                >
                                    <View style={styles.containerText}>
                                        <Text style={styles.routeName}>{name}</Text>
                                        <Text style={styles.textShop}>
                                            SHOP
                                            <Icon name='chevron-forward-outline' size={16} color={themeApp.colorPrimary} />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
            </View>
        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 85
    },
    containerTouchable: {
        backgroundColor: themeApp.colorSecundary,
        borderRadius: 10,
        height: 200,
        width: themeApp.widthStd,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerText: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        height: 130
    },
    routeName: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: themeApp.colorBlack,
        fontSize: 20
    },
    textShop: {
        fontSize: 15,
        justifyContent: 'space-between'
    }
})