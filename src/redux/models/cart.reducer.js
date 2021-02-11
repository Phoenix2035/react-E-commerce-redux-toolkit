import {createSlice} from "@reduxjs/toolkit";
import localCart from "../../utils/localCart";
import axios from "axios";


const CartReducer = createSlice({
    name: "cart",
    initialState: {
        cart: localCart,
        total: 0,
        cartItems: 0
    },
    reducers: {
        addToCart: (state, action) => {

        },
        increaseAmount: (state, action) => {

        },
        decreaseAmount: (state, action) => {

        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        clearCart: (state, action) => {

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




