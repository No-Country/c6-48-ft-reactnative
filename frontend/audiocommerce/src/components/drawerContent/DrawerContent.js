import React from 'react'
import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { ImageIcon } from './ImageIcon';
import { useNavigationState } from '@react-navigation/native';

export const DrawerContent = ({ navigation, state }) => {
    return (
        <DrawerContentScrollView >
            <View>
                {
                    state.routes.map(({ key, name }) => {

                        let iconUrl;

                        switch (name) {
                            case 'Headphone':
                                iconUrl = require('../../assets/img/menu-headphone.png');
                                break;
                            case 'Speakers':
                                iconUrl = require('../../assets/img/menu-speakers.png');
                                break;
                            case 'Earphone':
                                iconUrl = require('../../assets/img/menu-earphones.png');
                                break;

                            default:
                                iconUrl = require('../../assets/img/menu-headphone.png')
                                break;
                        }

                        return (
                            <View key={key} style={{ alignItems: 'center', marginTop: 85 }}>

                                <ImageIcon iconUrl={iconUrl} />

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(name) }}
                                    style={{
                                        backgroundColor: '#f1f1f1',
                                        borderRadius: 10,
                                        height: 200,
                                        width: 455,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <View style={{
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        bottom: 0,
                                        height: 130

                                    }}>
                                        <Text style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                            color: '#000',
                                            fontSize: 20
                                        }}>{name}</Text>
                                        <Text style={{ fontSize: 15, justifyContent: 'space-between' }}>
                                            SHOP
                                            <Icon name='chevron-forward-outline' size={16} color='#d87d4a' />
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
