import React, { useContext, useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { themeApp } from '../../themeApp/themeApp'
import { useForm } from '../../hooks/useForm';
import { apiDB } from '../../api/apiDb';
import { ProductContext } from '../../context/productContext/ProductContext';

export const AdminScreen = () => {

    const { createProduct, productState, removeError } = useContext(ProductContext);

    const { form, onChange } = useForm({
        title: '',
        description: '',
        price: '',
        features: '',
        category: 'headphones',
        img: ''

    });

    const { errorMsg } = productState;

    useEffect(() => {
        if(errorMsg.length === 0 ) return;
        Alert.alert( 'Something went wrong', errorMsg, [{ text: 'Ok', onPress: removeError }])
      
    }, [errorMsg])
    

    return (
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <Text style={styles.title}>Create a product:</Text>
            <View>

                <Text style={styles.titles}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Required'
                    onChangeText={(value) => onChange(value, 'title')}
                    value={form.title}
                />

                <Text style={styles.titles}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder='Required'
                    multiline
                    textAlignVertical='top'
                    onChangeText={(value) => onChange(value, 'description')}
                    value={form.description}
                />

                <Text style={styles.titles}>Price</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Required'
                    keyboardType='decimal-pad'
                    onChangeText={(value) => onChange(value, 'price')}
                    value={form.price}
                />

                <Text style={styles.titles}>Features</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder='Required'
                    multiline
                    textAlignVertical='top'
                    onChangeText={(value) => onChange(value, 'features')}
                    value={form.features}
                />

                <Text style={styles.titles}>Category</Text>
                <Picker
                    selectedValue={form.category}
                    onValueChange={(itemValue, itemIndex) =>
                        onChange(itemValue, 'category')
                    }
                    dropdownIconColor={themeApp.colorPrimary}
                    style={{ borderWidth: 2, borderColor: 'red' }}
                >
                    <Picker.Item label="Headphones" value="headphones" />
                    <Picker.Item label="Earphones" value="earphones" />
                    <Picker.Item label="Speakers" value="speakers" />
                </Picker>

                <Text style={styles.titles}>Image url</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Required'
                    onChangeText={(value) => onChange(value, 'img')}
                    value={form.img}
                />

                <TouchableOpacity
                style={ styles.button}
                onPress={()=> createProduct(form)}
                >
                    <Text style={ styles.buttonText }>Create</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: themeApp.colorBlack
    },
    titles: {
        color: themeApp.colorBlack,
        fontSize: 25
    },
    input: {
        width: themeApp.widthStd,
        height: 40,
        borderColor: themeApp.colorPrimary,
        borderWidth: 1.5,
        marginVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 18
    },
    textArea: {
        height: 100,
        overflow: 'scroll'
    }, 
    button:{

        width:themeApp.widthStd,
        backgroundColor: themeApp.colorPrimary,
        paddingVertical: 15,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 20,
        color: themeApp.colorWhite
    }
})