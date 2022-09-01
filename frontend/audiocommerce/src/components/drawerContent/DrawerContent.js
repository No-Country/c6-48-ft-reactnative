import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { ImageIcon } from '../';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeApp } from '../../themeApp/themeApp';

export const DrawerContent = ({ navigation }) => {

    const {width} = useWindowDimensions();
 return (
        <DrawerContentScrollView
            showsVerticalScrollIndicator={ false }
        >

            <View>
              
                            <View style={styles.container}>

                                <ImageIcon iconUrl={require('../../assets/img/menu/menu-headphone.png')} />

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Headphones') }}
                                    style={[{width: width*.9},styles.containerTouchable]}
                                >
                                    <View style={styles.containerText}>
                                        <Text style={styles.routeName}>Headphones</Text>
                                        <Text style={styles.textShop}>
                                            SHOP
                                            <Icon name='chevron-forward-outline' size={16} color={themeApp.colorPrimary} />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                            <View style={styles.container}>

                                <ImageIcon iconUrl={require('../../assets/img/menu/menu-speakers.png')} />

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Speakers') }}
                                    style={[{width: width*.9},styles.containerTouchable]}
                                >
                                    <View style={styles.containerText}>
                                        <Text style={styles.routeName}>Speakers</Text>
                                        <Text style={styles.textShop}>
                                            SHOP
                                            <Icon name='chevron-forward-outline' size={16} color={themeApp.colorPrimary} />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                            <View style={styles.container}>

                                <ImageIcon iconUrl={require('../../assets/img/menu/menu-earphones.png')} />

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Earphones') }}
                                    style={[{width: width*.9},styles.containerTouchable]}
                                >
                                    <View style={styles.containerText}>
                                        <Text style={styles.routeName}>Earphones</Text>
                                        <Text style={styles.textShop}>
                                            SHOP
                                            <Icon name='chevron-forward-outline' size={16} color={themeApp.colorPrimary} />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
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
        maxWidth: themeApp.widthStd,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -50
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