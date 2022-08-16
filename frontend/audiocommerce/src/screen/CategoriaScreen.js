import React from 'react'
import { Button, Text, View } from 'react-native'

export const CategoriaScreen = ({navigation}) => {
  return (
    <View>

        <Text>CategoriaScreen</Text>
        <Button 
            title='ir a ProductoScreen'
            onPress={()=> navigation.navigate('ProductoScreen')}
        />
    </View>
  )
}
