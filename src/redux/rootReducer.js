import {combineReducers} from '@reduxjs/toolkit'
import cart from "./models/cart.reducer"
import products from "./models/products.reducer"
import user from "./models/user.reducer"


const rootReducer = combineReducers({
    cart,
    products,
    user,
});

export default rootReducer;