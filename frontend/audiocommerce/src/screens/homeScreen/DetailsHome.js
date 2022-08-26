import React from 'react'
import { ProductoScreen } from '../productoScreen/ProductoScreen'

export const DetailsHome = ({ route }) => {
   const { product } = route.params;

  return (
    <ProductoScreen  product={ product }/>
  )
}
