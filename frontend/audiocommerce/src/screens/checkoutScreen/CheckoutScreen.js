import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Text, ScrollView, View, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {FooterScreen} from '../footerScreen/FooterScreen.js'
import { themeApp } from '../../themeApp/themeApp'
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';
import {ModalCartForSummary} from '../../components/modals/ModalCartForSummary.js'


export const CheckoutScreen = ({navigation}) => {
	const [state, setState] = useState({
		selectedButton: '',
		visible: false,
	})

	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
	return (
		<ScrollView>
			<View style= {styles.conteinerOut}>
				<View style= {styles.conteinerIn}>
					<Text style= {styles.title}>CHECKOUT</Text>
					<Text style= {styles.text1}>BILLING DETAILS</Text>
					<View style= {styles.billing}>
						<Formik 
						  initialValues= {{
							Name: '',
							EmailAddress: '',
							numberPhone: '',
							yourAddress: '',
							zipCode: '',
							city: '',
							country: '',
							eMoneyNumber: '',
							eMoneyPin: '',
						}}
						validationSchema={Yup.object().shape({
							Name: Yup.string().min(1, 'Too Short!').max(15, 'Too Long!').required(),
							EmailAddress: Yup.string().email("Email invalid").required('Required'),
							numberPhone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
							yourAddress: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required("Please insert your address"),
							zipCode: Yup.string().required("Please insert your ZIP code"),
							city: Yup.string().required('Please write your city'),
							country: Yup.string().required('Please write your country'),
							category: Yup.string().required('Please write your city'),
							eMoneyNumber: Yup.number().typeError('must be a number!').required('Please write your card number'),
							eMoneyPin: Yup.number().typeError('must be a number!').required("Please insert your code security card")
						})}
						>

							{({values, errors, handleSubmit, handleChange, handleBlur, touched}) => (
							<View>
								
								<Text style={styles.miniTitles}>Name</Text>
                                  <TextInput
                                 style={[styles.input, (touched.Name && errors.Name) && styles.error]}
                                 onBlur={handleBlur('Name')}
                                 multiline
                                 onChangeText={handleChange('Name')}
                                 value={values.Name}
								 placeholder="Alex Vigo"

                                />

                        { (errors.Name) && (<Text style={styles.errorInred}>
                                <ErrorMessage name='Name' />
                            </Text>)
                        }

								<Text style= {styles.miniTitles}>Email Address</Text>
										<TextInput 
										style= {[styles.input, (touched.EmailAddress && errors.EmailAddress) && styles.error]}
										onBlur={handleBlur("EmailAddress")}
										multiline
										onChangeText={handleChange("EmailAddress")}
										value={values.EmailAddress}
										placeholder="alex@gmail.com"
										/>

						{ (errors.EmailAddress) && (<Text style={styles.errorInred}>
									<ErrorMessage name='EmailAddress' />
                            </Text>)
                        }

								<Text style= {styles.miniTitles}>Number Phone</Text>
										<TextInput 
										style= {[styles.input, (touched.numberPhone && errors.numberPhone) && styles.error]}										
										onBlur={handleBlur("numberPhone")}
										onChangeText={handleChange("numberPhone")}
										value={values.numberPhone}
										placeholder="+541162653092"
										/>

						{ (errors.numberPhone) && (<Text style={styles.errorInred}>
									<ErrorMessage name='numberPhone' />
                            </Text>)
                        }				
									
										<Text style= {styles.text2}>SHIPPING INFO</Text>
										<Text style= {styles.miniTitles}>Your Address</Text>
										<TextInput 
										style= {[styles.input, (touched.yourAddress && errors.yourAddress) && styles.error]}
										onBlur={handleBlur("yourAddress")}
										onChangeText={handleChange("yourAddress")}
										value={values.yourAddress}
										placeholder="Carrion 3029"
										/>

						{ (errors.yourAddress) && (<Text style={styles.errorInred}>
									<ErrorMessage name='yourAddress' />
                            </Text>)
                        }		


										<Text style= {styles.miniTitles}>ZIP code</Text>
										<TextInput 
										style= {[styles.input, (touched.zipCode && errors.zipCode) && styles.error]}
										onBlur={handleBlur("zipCode")}
										onChangeText={handleChange("zipCode")}
										value={values.zipCode}
										placeholder="B3452"
										/>

						{ (errors.zipCode) && (<Text style={styles.errorInred}>
									<ErrorMessage name='zipCode' />
                            </Text>)
                        }		
										<Text style= {styles.miniTitles}>City</Text>
										<TextInput 
										style= {[styles.input, (touched.city && errors.city) && styles.error]}
										onBlur={handleBlur("city")}
										onChangeText={handleChange("city")}
										value={values.city}
										placeholder="London"
										/>

						{ (errors.city) && (<Text style={styles.errorInred}>
									<ErrorMessage name='city' />
                            </Text>)
                        }											
										<Text style= {styles.miniTitles}>Country</Text>
											<TextInput 
											style= {[styles.input, (touched.country && errors.country) && styles.error]}
											onBlur={handleBlur("country")}
											onChangeText={handleChange("country")}
											value={values.country}
											placeholder="England"
											/>

						{ (errors.country) && (<Text style={styles.errorInred}>
									<ErrorMessage name='country' />
                            </Text>)
                        }	

									 <Text style= {styles.text2}>PAYMENT DETAILS</Text>
									 <Text style= {styles.miniTitles}>Payment Method</Text>
									 <TouchableOpacity style= {{width: 250,height: 50,borderRadius: 10,borderWidth:4,marginVertical: 20,marginLeft: 35, borderColor: state.selectedButton === 'button1' ? '#d87d4a' : '#E1DFDF' }}
									 onPress={() => setState({ selectedButton: 'button1', visible: true})}
									 >
										<View style= {{flexDirection: "row",}}>
											<Icon name= 'add-circle-outline' style= {{margin: 5,}}size={30} color= '#E1DFDF'></Icon>
											<Text style= {{fontSize: 18, color: '#000', marginTop: 9, marginLeft: 4,}}>E-money</Text>
										</View>
									 </TouchableOpacity>


									 <TouchableOpacity style= {{width: 250,height: 50,borderRadius: 10,borderWidth: 4,marginVertical: 20,marginLeft: 35, borderColor: state.selectedButton === 'button2' ? '#d87d4a' : '#E1DFDF' }}
									 onPress={() => setState({ selectedButton: 'button2'})}
									 >
										<View style= {{flexDirection: "row",}}>
											<Icon name= 'add-circle-outline' style= {{margin: 5,}}size={30} color= '#E1DFDF'></Icon>
											<Text style= {{fontSize: 18, color: '#000', marginTop: 9, marginLeft: 4,}}>Cash on Delivery</Text>
										</View>
									 </TouchableOpacity>

									 {state.visible ? <View> 
										<Text style= {styles.miniTitles}>e-Money-Number</Text>
										<TextInput 
										style= {[styles.input, (touched.eMoneyNumber && errors.eMoneyNumber) && styles.error]}
										onBlur={handleBlur("eMoneyNumber")}
										onChangeText={handleChange("eMoneyNumber")}
										value={values.eMoneyNumber}
										placeholder="43235678"
										/>
										{ (errors.eMoneyNumber) && (<Text style={styles.errorInred}>
									          <ErrorMessage name='eMoneyNumber' />
                                         </Text>)
                                        }	
									 </View> : null}

										{state.visible ? <View> 
										<Text style= {styles.miniTitles}>e-Money-PIN</Text>
										<TextInput 
										style= {[styles.input, (touched.eMoneyPin && errors.eMoneyPin) && styles.error]}
										onBlur={handleBlur("eMoneyPin")}
										onChangeText={handleChange("eMoneyPin")}
										value={values.eMoneyPin}
										placeholder="2234"
										/>
										{ (errors.eMoneyPin) && (<Text style={styles.errorInred}>
									          <ErrorMessage name='eMoneyPin' />
                                         </Text>)
                                        }	
									 </View> : null}
							   </View>
						   )}
						</Formik>
					</View>
				</View>
			<ModalCartForSummary/>
			</View>
		 <FooterScreen style= {styles.foot}{...navigation}/> 
		</ScrollView>
	)
}






const styles = StyleSheet.create({
	conteinerOut: {
		height: 2450,
		backgroundColor: '#F7F7F7',
	},

	conteinerIn: {
		flex: 1,
		marginVertical: 40,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: 'white',
		borderRadius: 20,

	},
	
	title: {
        fontSize: 39,
        color: '#000',
        marginTop: 50,
		marginLeft: 35,
    },

	miniTitles: {
		fontSize: 18,
        color: '#000',
        marginTop: 30,
		marginLeft: 35,
		fontWeight: '500',
	},
	
	input: {
        // flex: 1,
        height: 55,
		width: 250,
        borderColor: '#E1DFDF',
        borderWidth: 1.5,
        marginVertical: 5,
		marginLeft: 35,
		padding: 15,
        borderRadius: 5,
        fontSize: 18,
		color: "black"
    },

	error: {
        borderColor: 'red',
        borderWidth: 2
    },

	errorInred: {
		color: "red",
		marginLeft: 35,
	},

	text1: {
        color: '#d87d4a',
        fontSize: 20,
        marginTop: 10,
		marginLeft: 35,
	},

	text2: {
        color: '#d87d4a',
        fontSize: 20,
        marginTop: 60,
		marginLeft: 35,
	},
	foot: {
		display: "end",
	}
})