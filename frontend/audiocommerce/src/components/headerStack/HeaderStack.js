import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeApp } from '../../themeApp/themeApp';
import { ProductContext } from '../../context/productContext/ProductContext';

export const HeaderStack = ({ navigation }) => {

    const { productState } = useContext(ProductContext)

    return (
        <View
            style={styles.headerContainer}>
            <View style={styles.containerMenuButton}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrow-back-outline' size={30} color={ themeApp.colorWhite } />
                </TouchableOpacity>
            </View>
            <View
                style={styles.containerHeader}
            >

                <Text
                    style={styles.headerText}
                >{productState.category}</Text>
            </View>

            <View style={ styles.containerHomeCart } >
            {/* este espacio es por si quiero metener algun boton y me sirve para centrar el titulo de la pagina */}
            </View>

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
        fontWeight: '300',
        textTransform: 'uppercase',
    },
    containerMenuButton:{
        flex:1,
        paddingLeft: 10
    },
    containerHomeCart:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:100,
        marginLeft:0,
        paddingRight:10
    }
})