import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {featuredProducts} from "../../utils/helpers";


const ProductsReducer = createSlice({
    name: "products",
    initialState: {
        products: [],
        featured: [],
        loading: true,
    },
    reducers: {
        setProducts: (state, action) => {
            state.loading = true
            state.products.push(action.payload) // or state.products.push(...action.payload) i use flat in Products.js
            state.loading = false
        },
        setFeatured: (state, action) => {
            state.loading = true
            state.featured.push(...action.payload)
            state.loading = false
        }


    }
})


export const getProductsAsync = url => dispatch => {
    axios.get(`${url}/products`)
        .then(res => {
                const featured = featuredProducts(res.data)

                dispatch(setProducts(res.data))
                dispatch(setFeatured(featured))
            }
        )

}


export const {setProducts, setFeatured} = ProductsReducer.actions

export default ProductsReducer.reducer



