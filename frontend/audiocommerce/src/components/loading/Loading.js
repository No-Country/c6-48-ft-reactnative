import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { themeApp } from '../../themeApp/themeApp'

export const Loading = () => {
  return (
    <View
        style={ styles.container }
    >
        <ActivityIndicator size={ 100 } color={themeApp.colorPrimary}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
