import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeApp } from '../../themeApp/themeApp';

export const FooterScreen = (navigate) => {

    return (
    <View style={styles.container}>
            <View style= {styles.lineOrange}></View>
        <View>
           <Text style= {styles.headerText}>AudioCommerce</Text>
       </View>

       <View style= {styles.buttons}>
       <View  style={styles.container2AndTouchable}>

             <TouchableOpacity
             onPress={() => { navigate.navigate('Home') }}
             style={styles.container2AndTouchable}
            >
                <View>
                  <Text style= {{color: "#fff"}}>HOME</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => { navigate.navigate('Headphones') }}
             style={styles.container2AndTouchable}
            >
                <View>
                   <Text style= {{color: "#fff"}}>HEADPHONES</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => { navigate.navigate('Speakers') }}
             style={styles.container2AndTouchable}
            >
                 <View>
                   <Text style= {{color: "#fff"}}>SPEAKERS</Text>
                 </View>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => { navigate.navigate('Earphones') }}
             style={styles.container2AndTouchable}
            >
                 <View>
                   <Text style= {{color: "#fff"}}>EARPHONES</Text>
                 </View>
            </TouchableOpacity>
            
       </View>
       </View>

       <View style= {{alignItems: "center",}}>
        
         <Text style= {styles.BigText}>
            AudioCommerce is an all in one stop to fulfill your audio needs. we are a small team of music lovers and sound specialist who are devoted to helping you get the most out of personal
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
    container2AndTouchable: {
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
        backgroundColor: themeApp.colorPrimary,
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