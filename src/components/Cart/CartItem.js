import React from "react";
import {FaAngleUp, FaAngleDown} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import {removeItem} from "../../redux/models/cart.reducer";

function CartItem({id, title, image, price, amount}) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)

    return (
        <article className="cart-item">
            <img src={image} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h5>${price}</h5>
                <button
                    onClick={() =>  dispatch(removeItem(id))}
                    type="button"
                    className="cart-btn remove-btn"
                >
                    remove
                </button>
            </div>

            <div>
                <button type="button" className="cart-btn amount-btn" onClick={() => console.log("inc")}><FaAngleUp/>
                </button>
                <p className="item-amount">{amount}</p>
                <button type="button" className="cart-btn amount-btn" onClick={() => console.log("dec")}><FaAngleDown/>
                </button>
            </div>
        </article>
    )
}


export default CartItem