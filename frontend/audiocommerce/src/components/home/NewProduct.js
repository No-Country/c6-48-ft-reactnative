import React from 'react'
import { Image, Text, View } from 'react-native'

export const NewProduct = ({product}) => {

    console.log(JSON.stringify(product,null,6))
  return (

    <View style={{height: 500, backgroundColor: 'black', justifyContent:'center', alignItems:'center'}}>
        <Image
            source={{uri: product.img }}
            style={{width: 500, height: 500, resizeMode:'contain', opacity: 0.4}}
        />
        <View
            style={{position:'absolute', borderColor:'red', borderWidth:2, marginHorizontal: 15}}
        >
        {
            product.isNewProduct && <Text style={{color:'#c6c6c6', textAlign:'center', fontSize: 25}}>NEW PRODUCT</Text>
        }
        <Text
            style={{color:'white', fontSize: 40, textAlign:'center'}}
        >{product.title}</Text>
        <Text
            style={{color:'#c6c6c6', textAlign:'center', fontSize:20}}
        >
            {product.description}
        </Text>
        </View>

    </View>
  )
}
