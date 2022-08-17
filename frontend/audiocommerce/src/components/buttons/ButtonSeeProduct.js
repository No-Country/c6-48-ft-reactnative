import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { themeApp } from '../../themeApp/themeApp'

export const ButtonSeeProduct = ({ onPress, containerStyle, textStyle }) => {

    return (
        
        <TouchableOpacity
            style={[{
                paddingHorizontal: 20,
                backgroundColor: themeApp.colorPrimary,
                width: 280,
                height: 60,
                justifyContent: 'center'
            }, containerStyle ]}
            onPress={onPress}
        >
            <Text
                style={[{
                    color: 'white',
                    fontSize: 25,
                    textAlign: 'center'

                }, textStyle]}
            >
                SEE PRODUCT
            </Text>
        </TouchableOpacity>
    )
}
