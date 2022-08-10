import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeApp } from '../../themeApp/themeApp';

export const HeaderApp = ({ navigation }) => {

    return (
        <View
            style={styles.headerContainer}>
            <View
                style={styles.header}
            >

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Icon name='menu-outline' size={40} color={themeApp.colorWhite} />
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.headerText}
                >AudioCommerce</Text>
                <View>
                    <TouchableOpacity
                    >
                        <Icon name='cart-outline' size={40} color={themeApp.colorWhite}/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: themeApp.colorBlack,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    screenTitle: {
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: '400'
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        paddingTop: 8,
        fontWeight: '300'
    }
})