import React from 'react';
import { Text, View, Button, Linking, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { themeApp } from '../../themeApp/themeApp';
import Icon from 'react-native-vector-icons/Ionicons';

export const FooterScreen = (navigate) => {
    const state = navigate.getState();

     //-->> no haria falta si pasamos el estado de la navegacion como parameter
     //console.log("arreglooooooACAPA:", state.routes)
     console.log("arreglooooooACAPAPERO CAMBIADO:", navigate)
    return (
    <View style={styles.container}>
            <View style= {styles.lineOrange}></View>
        <View>
           <Text style= {styles.headerText}>AudioCommerce</Text>
       </View>

       <View style= {styles.buttons}>
       {
                    state.routes.map(({ key, name }) => {
                        if (name === 'Checkout') return null;
                        if (name === 'ProductoScreen') return null;
                        if (name === 'Footer') return null;
                        
                        return (
                            <View key={key} style={styles.container2}>
                                <TouchableOpacity
                                    onPress={() => { navigate.navigate(name) }}
                                >
                                    <View>
                                        <Text style= {{color: "#fff"}}>{name.toUpperCase()}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
       </View>

       <View style= {{alignItems: "center",}}>
        
         <Text style= {styles.BigText}>
            Audiophile is an all in one stop to fulfill your audio needs. we are a small team of music lovers and sound specialist who are devoted to helping you get the most out of personal
            audio. Come and visit our demo facility - we are open 7 days a week
         </Text>

         <Text style= {styles.BigText}>
             Copyright 2022. Al Rights Reserved 
         </Text>

         <View style= {styles.icons}>
            <Icon name="logo-facebook" style= {{margin: 10,}}size={30} color={ themeApp.colorWhite }></Icon>
            <Icon name="logo-twitter" style= {{margin: 10,}} size={30} color={ themeApp.colorWhite }></Icon>
            <Icon name="logo-instagram" style= {{margin: 10,}} size={30} color={ themeApp.colorWhite }></Icon>
         </View>
       </View>
</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeApp.colorBlack,
        alignItems: "center",
    },
    container2: {
        alignItems: 'center',
        margin: 15,
        alignItems: "center",
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        paddingTop: 30,
        fontWeight: '300',
    },
    lineOrange: {
        alignItems: "center",
        height: 3,
        width: 210,
        backgroundColor: '#D87D4A',
    },
    BigText: {
        margin: 15,
        color: '#6F6968',
        textAlign: 'center',
        fontSize: 19, 
    },
    buttons: {
        marginTop: 40,
    },
    icons: {
        flexDirection: "row",
    },
})