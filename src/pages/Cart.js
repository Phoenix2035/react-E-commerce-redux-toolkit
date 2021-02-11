import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import {setCartItems, setTotal} from "../redux/models/cart.reducer";

function Cart() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const cart = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)

    useEffect(() => {
        // Cart Items
        let newCartItems = cart.reduce((total, cartItem) => {
            return (total += cartItem.amount)
        }, 0)
        dispatch(setCartItems(newCartItems))

        // Cart Total
        let newTotal = cart.reduce((total, cartItem) => {
            return total += (cartItem.amount * cartItem.price)
        }, 0)
        newTotal = parseFloat(newTotal.toFixed(2))
        dispatch(setTotal(newTotal))
    }, [cart])

    if (cart.length === 0) return <EmptyCart/>

    return (
        <section className="cart-items section">
            <h2>your cart</h2>
            {
                cart.map(item =>
                    <CartItem key={item.id} {...item}/>
                )
            }
            <h2>total : $ {total}</h2>
            {
                user
                    ?
                    <Link to="/checkout" className="btn btn-primary btn-block">checkout</Link>
                    :
                    <Link to="/login" className="btn btn-primary btn-block">login</Link>
            }
        </section>
    )
}


export default Cart