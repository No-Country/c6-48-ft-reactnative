import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { themeApp } from '../../themeApp/themeApp'

export const ButtonSeeProduct = ({ onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
        style={{
            backgroundColor,
            paddingHorizontal: 20,
            width: 280,
            height:60,
            justifyContent:'center'
        }}
        onPress={ onPress }
    >
        <Text
            style={{
                color: 'white',
                fontSize: 25,
                textAlign:'center'

            }}
        >
            SEE PRODUCT
        </Text>
    </TouchableOpacity>
  )
}
