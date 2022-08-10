import React from 'react'
import { Image, View } from 'react-native'

export const ImageIcon = ({iconUrl}) => {
    return (
        <>
            <Image source={iconUrl}
                style={{
                    width: 130,
                    height: 130,
                    resizeMode: 'contain',
                    top: -60,
                    position: 'absolute',
                    zIndex: 1,
                }}
            />
            <Image
                source={require('../../assets/img/sombra.png')}
                style={{
                    // backgroundColor:'red',
                    width: 220,
                    resizeMode: 'contain',
                    position: 'absolute',
                    zIndex: 1,
                    top: -20,
                }}
            />
        </>
    )
}