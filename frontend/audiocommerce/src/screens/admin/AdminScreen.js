import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


import { themeApp } from '../../themeApp/themeApp'
import { ProductContext } from '../../context/productContext/ProductContext';

export const AdminScreen = () => {

    const { createProduct, productState, removeError } = useContext(ProductContext);

    const [tempUri, setTempUri] = useState();

    const { errorMsg } = productState;

    useEffect(() => {
        if (errorMsg.length === 0) return;
        Alert.alert('Something went wrong', errorMsg, [{ text: 'Ok', onPress: removeError }])

    }, [errorMsg])



    const takePhoto = () => {

        launchCamera({
            mediaType: 'photo',
            quality: 0.5

        }, (resp) => {
            console.log(JSON.stringify(resp, null, 6))
            if (resp.didCancel) return;
            if (!resp.assets) return;
            console.log(resp.uri)
            setTempUri(resp.assets[0].uri);
        })
    }
    return (

        <ScrollView style={{ paddingHorizontal: 30 }}>
            <Text style={styles.title}>Create a product:</Text>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    price: '',
                    stock: '',
                    features: '',
                    category: 'headphones',

                }}
                onSubmit={(values, { setSubmitting }) => {
                    createProduct(values);
                    setSubmitting(false);
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required(),
                    description: Yup.string().required(),
                    price: Yup.number().required(),
                    stock: Yup.number().required(),
                    features: Yup.string().required(),
                    category: Yup.string().required(),
                })}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (

                    <View >

                        <View style={styles.containerRow}>
                            <Text style={styles.titles}>Title:</Text>
                            <TextInput
                                style={[styles.input, styles.inputRow, (touched.title && errors.title) && styles.error]}
                                onBlur={handleBlur('title')}
                                onChangeText={handleChange('title')}
                                value={values.title}
                            />
                        </View>
                        {
                            (errors.title) && (<Text style={styles.errorMsg} >
                                <ErrorMessage name='title' />
                            </Text>)
                        }

                        <Text style={styles.titles}>Description:</Text>
                        <TextInput
                            style={[styles.input, styles.textArea, (touched.description && errors.description) && styles.error]}
                            onBlur={handleBlur('description')}
                            multiline
                            textAlignVertical='top'
                            onChangeText={handleChange('description')}
                            value={values.description}
                        />
                        {
                            (errors.description) && (<Text style={styles.errorMsg}>
                                <ErrorMessage name='description' />
                            </Text>)
                        }


                        <View style={styles.containerRow}>
                            <Text style={styles.titles}>Price:</Text>
                            <TextInput
                                style={[styles.input, styles.inputRow, (touched.price && errors.price) && styles.error]}
                                onBlur={handleBlur('price')}
                                keyboardType='decimal-pad'
                                onChangeText={handleChange('price')}
                                value={values.price}
                            />
                        </View>
                        {
                            (errors.price) && (<Text style={styles.errorMsg} >
                                <ErrorMessage name='price' />
                            </Text>)
                        }


                        <View style={styles.containerRow}>
                            <Text style={styles.titles}>Stock:</Text>
                            <TextInput
                                style={[styles.input, styles.inputRow, (touched.stock && errors.stock) && styles.error]}
                                onBlur={handleBlur('stock')}
                                keyboardType='decimal-pad'
                                onChangeText={handleChange('stock')}
                                value={values.stock}
                            />
                        </View>
                        {
                            (errors.stock) && (<Text style={styles.errorMsg} >
                                <ErrorMessage name='stock' />
                            </Text>)
                        }

                        <Text style={styles.titles}>Features:</Text>
                        <TextInput
                            style={[styles.input, styles.textArea, , (touched.features && errors.features) && styles.error]}
                            multiline
                            onBlur={handleBlur('features')}
                            textAlignVertical='top'
                            onChangeText={handleChange('features')}
                            value={values.features}
                        />
                        {
                            (errors.features) && (<Text style={styles.errorMsg} >
                                <ErrorMessage name='features' />
                            </Text>)
                        }


                        <Text style={styles.titles}>Category:</Text>
                        <Picker
                            selectedValue={values.category}
                            onValueChange={handleChange('category')}
                            dropdownIconColor={themeApp.colorPrimary}
                        >
                            <Picker.Item label="Headphones" value="headphones" />
                            <Picker.Item label="Earphones" value="earphones" />
                            <Picker.Item label="Speakers" value="speakers" />
                        </Picker>
                        {
                            (errors.category) && (<Text style={styles.errorMsg} >
                                <ErrorMessage name='category' />
                            </Text>)
                        }


                        <Text style={styles.titles}>Image</Text>
                        <View style={styles.containerRow}>
                            <TouchableOpacity
                                onPress={() => takePhoto()}
                                style={ [styles.button, { flex: 1}]}
                            >
                                <Text style={ styles.buttonText}>Cam</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => launchImageLibrary()}
                                style={ [styles.button, { flex: 1}]}
                            >
                                <Text style={ styles.buttonText }>Galery</Text>
                            </TouchableOpacity>
                        </View>


                        {
                            (tempUri) && (
                                <Image
                                    source={{ uri: tempUri }}
                                    style={{
                                      width: '100%',
                                      height: 400 
                                    }}
                                />
                            )
                        }


                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                            disabled={isSubmitting}
                        >
                            <Text style={styles.buttonText}>Create</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>


        </ScrollView>
    )
}


const styles = StyleSheet.create({
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
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
        // flex: 1,
        height: 40,
        borderColor: themeApp.colorPrimary,
        borderWidth: 1.5,
        marginVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 18
    },
    inputRow: {
        width: 250,
        marginLeft: 15
    },
    textArea: {
        height: 100,
    },
    button: {
        flex: 1,
        marginVertical: 15,
        backgroundColor: themeApp.colorPrimary,
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: themeApp.colorWhite
    },
    error: {
        borderColor: 'red',
        borderWidth: 2
    },
    errorMsg: {
        color: 'red',
        textTransform: 'uppercase'
    }
})