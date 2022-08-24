import React, { createContext, useReducer } from "react";
import { apiDB } from "../../api/apiDb";
// import { data } from "../../api/data";
import { productReducer } from "./productReducer";


// crear el context

export const ProductContext = createContext({});

//proveer el estado

export const ProductProvider = ({ children }) => {

    const [productState, dispatch] = useReducer(productReducer, {
        products: [],
        cart: [],
        productDetails: {},
        errorMsg: '',
        isLoading: true,
    })

    const addProducts = (data) => {
        dispatch({ type: 'addProducts', payload: data })
    }


    const addProductDetails = (product) => {
        dispatch({
            type: 'addProductDetails',
            payload: product
        })
    }


    const createProduct = (product, fileToUpload) => {


        if (fileToUpload.uri) {

            const formData = new FormData();

            formData.append('file', fileToUpload);



            apiDB.postForm('/uploads/productos', formData)
                .then(resp => {

                    product.img = resp.data.msg;

                    const body = JSON.stringify(product);

                    apiDB.post('/productos', body, {
                        "headers": {

                            "content-type": "application/json",

                        },
                    }).then(resp => console.log(`Se creo el producto: ${product.title} con imagen`))
                        .catch(error => {
                            console.log(error)
                            dispatch({
                                type: 'addErrorMsg',
                                payload: error.response.data.errors[0].msg
                            })
                        })
                }).catch(error => {
                    console.log(error)
                    dispatch({
                        type: 'addErrorMsg',
                        payload: error.response.data.errors[0].msg
                    })
                });

        } else {

            product.img = 'https://res.cloudinary.com/abel1711/image/upload/v1661199049/qmaemueijjpnyecktfoj.jpg';
            const body = JSON.stringify(product);

                    apiDB.post('/productos', body, {
                        "headers": {

                            "content-type": "application/json",

                        },
                    }).then(resp => console.log(`Se creo el producto: ${product.title}, sin imagen`))
                        .catch(error => {
                            console.log(error)
                            dispatch({
                                type: 'addErrorMsg',
                                payload: error.response.data.errors[0].msg
                            })
                        })
        }

    }

    const getData = async(setRefreshing)=>{
        setLoading(true)
        if(setRefreshing){setRefreshing(true);}

		try {
			const { data } = await apiDB.get(`/productos`, {
				params: {
					limite: 20
				}
			});
			addProducts(data.productos)
			console.log('hey! se obtubo la data')
            setLoading(false)
		} catch (error) {
			console.log(error)
		}
		
		if(setRefreshing){ setRefreshing(false);}
    }

    const setLoading = ( value )=>{
        dispatch({
            type: 'setLoading',
            payload: value
        })
    }

    const removeError = () => {
        dispatch({
            type: 'removeError'
        })
    }

    return (
        <ProductContext.Provider value={{
            productState,
            addProducts,
            addProductDetails,
            createProduct,
            removeError, 
            getData,
            setLoading,
        }}>
            {children}
        </ProductContext.Provider>

    )
}