import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";

function Cart() {
    const user = useSelector(state => state.user.user)
    const cart = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)

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