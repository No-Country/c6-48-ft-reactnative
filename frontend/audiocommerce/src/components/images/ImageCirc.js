import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const ImageCirc = ({ img }) => {
    return (
        <View style={ styles.container }>
            <Image
                source={{
                    uri: img
                }}
                style={{ width: 200, height: 200, resizeMode: 'contain', position: 'absolute', zIndex: 10 }}
            />
            <Image
                source={require('../../assets/img/otros/circulo.png')}
                style={[styles.imageCirculo, {width: '200%'}]}

            />
            <Image
                source={require('../../assets/img/otros/circulo.png')}
                style={[styles.imageCirculo, {width: '100%'}]}

            />
            <Image
                source={require('../../assets/img/otros/circulo.png')}
                style={[styles.imageCirculo, {width: '80%'}]}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 300,
        // borderWidth: 2,
        // borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCentral:{ width: 230, height: 230, resizeMode: 'contain', position: 'absolute', zIndex: 10 },
    imageCirculo:{resizeMode: 'contain', position: 'absolute', opacity: 0.3 }
})