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
							name: '',
							email: '',
							phoneNumber: '',
							address: '',
							zipCode: '',
							city: '',
							country: '',
							paymentMethod: '',
							eMoneyNumber: '',
							eMoneyPin: '',
						}}
						validationSchema={Yup.object().shape({
							name: Yup.string().min(1, 'Too Short!').max(15, 'Too Long!').required(),
							email: Yup.string().email("Email invalid").required('Required'),
							phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
							address: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required("Please insert your address"),
							zipCode: Yup.string().required("Please insert your ZIP code"),
							city: Yup.string().required('Please write your city'),
							country: Yup.string().required('Please write your country'),
							eMoneyNumber: Yup.number().typeError('must be a number!').required('Please write your card number'),
							eMoneyPin: Yup.number().typeError('must be a number!').required("Please insert your code security card")
						})}
						>

							{({values, errors, handleSubmit, handleChange, handleBlur, touched}) => (
							<View>
								
								<Text style={styles.miniTitles}>Name</Text>
                                  <TextInput
                                 style={[styles.input, (touched.name && errors.name) && styles.error]}
                                 onBlur={handleBlur('name')}
                                 multiline
                                 onChangeText={handleChange('name')}
                                 value={values.name}
								 placeholder="Alex Vigo"

                                />

                        { (errors.name) && (<Text style={styles.errorInred}>
                                <ErrorMessage name='name' />
                            </Text>)
                        }

								<Text style= {styles.miniTitles}>Email Address</Text>
										<TextInput 
										style= {[styles.input, (touched.email && errors.email) && styles.error]}
										onBlur={handleBlur("email")}
										multiline
										onChangeText={handleChange("email")}
										value={values.email}
										placeholder="alex@gmail.com"
										/>

						{ (errors.email) && (<Text style={styles.errorInred}>
									<ErrorMessage name='email' />
                            </Text>)
                        }

								<Text style= {styles.miniTitles}>Number Phone</Text>
										<TextInput 
										style= {[styles.input, (touched.phoneNumber && errors.phoneNumber) && styles.error]}										
										onBlur={handleBlur("phoneNumber")}
										onChangeText={handleChange("phoneNumber")}
										value={values.phoneNumber}
										placeholder="+541162653092"
										/>

						{ (errors.phoneNumber) && (<Text style={styles.errorInred}>
									<ErrorMessage name='phoneNumber' />
                            </Text>)
                        }				
									
										<Text style= {styles.text2}>SHIPPING INFO</Text>
										<Text style= {styles.miniTitles}>Your Address</Text>
										<TextInput 
										style= {[styles.input, (touched.address && errors.address) && styles.error]}
										onBlur={handleBlur("address")}
										onChangeText={handleChange("address")}
										value={values.address}
										placeholder="Carrion 3029"
										/>

						{ (errors.address) && (<Text style={styles.errorInred}>
									<ErrorMessage name='address' />
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
		height: 2500,
		backgroundColor: '#F7F7F7',
	},

	conteinerIn: {
		flex: 1,
		marginVertical: 10,
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
		marginTop: 3,
	}
})