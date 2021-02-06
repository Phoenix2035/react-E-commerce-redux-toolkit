import {combineReducers} from '@reduxjs/toolkit'
import cart from "./models/cart"
import products from "./models/products"
import user from "./models/user"


const rootReducer = combineReducers({
    cart,
    products,
    user,
});

export default rootReducer;