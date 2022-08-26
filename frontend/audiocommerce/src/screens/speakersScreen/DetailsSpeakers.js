import React from 'react'
import { ProductoScreen } from '../productoScreen/ProductoScreen'

export const DetailsSpeakers = ({ route }) => {
  const { product } = route.params;
  return (
    <ProductoScreen product={ product }/>
  )
}
