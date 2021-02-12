import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {featuredProducts} from "../../utils/helpers";
import {setFeatured, setProducts} from "./products.reducer";


const CartReducer = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
        cartItems: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const {id, image, title, price} = action.payload
            const item = state.cart.find(item => item.id === id)
            if (item) {
                state.cart.map(item => item.id === id && item.amount++)
            } else {
                const newItem = {id, image, title, price, amount: 1}
                state.cart.push(newItem)
            }
        },
        increaseAmount: (state, action) => {
            state.cart.map(item => item.id === action.payload && item.amount++)
        },
        decreaseAmount: (state, action) => {
            state.cart.map(item => {
                if (item.amount === 1) {
                    state.cart = state.cart.filter(item => item.id !== action.payload)
                } else if (item.id === action.payload) {
                    item.amount--
                }
            })

        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        clearCart: (state, action) => {
            state.cart = action.payload
        },
        setCartItems: (state, action) => {
            state.cartItems = action.payload
        },
        setTotal: (state, action) => {
            state.total = action.payload
        }
    }
})


export const {
    addToCart,
    increaseAmount,
    decreaseAmount,
    removeItem,
    clearCart,
    setCartItems,
    setTotal
} = CartReducer.actions

export default CartReducer.reducer




