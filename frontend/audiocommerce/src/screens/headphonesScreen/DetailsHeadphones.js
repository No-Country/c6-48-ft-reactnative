import React from 'react'
import { Text } from 'react-native'
import { ProductoScreen } from '../productoScreen/ProductoScreen'

export const DetailsHeadphones = ({route}) => {
  const { product } = route.params;
  return (
    <ProductoScreen product={ product }/>
  )
}
