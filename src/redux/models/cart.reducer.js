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
    reducers: {}
})


export const {} = CartReducer.actions

export default CartReducer.reducer




