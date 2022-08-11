import React from 'react'
import { Image, StyleSheet } from 'react-native'

export const ImageIcon = ({iconUrl}) => {
    return (
        <>
            <Image source={iconUrl}
                style={ styles.image }
            />
            <Image
                source={require('../../assets/img/menu/sombra.png')}
                style={ styles.sombra }
            />
        </>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 130,
        height: 130,
        resizeMode: 'contain',
        top: -60,
        position: 'absolute',
        zIndex: 1,
    },
    sombra:{
        width: 220,
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: 1,
        top: -20,
    }
})
