import React, {useEffect} from "react";
import {FaAngleUp, FaAngleDown} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {removeItem, increaseAmount, decreaseAmount} from "../../redux/models/cart.reducer";

function CartItem({id, title, image, price, amount}) {
    const dispatch = useDispatch()

    useEffect(() => {
        if (amount < 1) {
            dispatch(removeItem(id))
        }
    }, [amount])

    return (
        <article className="cart-item">
            <img src={image} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h5>${price}</h5>
                <button
                    onClick={() => dispatch(removeItem(id))}
                    type="button"
                    className="cart-btn remove-btn"
                >
                    remove
                </button>
            </div>

            <div>
                <button type="button" className="cart-btn amount-btn" onClick={() => dispatch(increaseAmount(id))}>
                    <FaAngleUp/>
                </button>
                <p className="item-amount">{amount}</p>
                <button type="button" className="cart-btn amount-btn"
                        onClick={() => dispatch(decreaseAmount(id, amount))}>
                    <FaAngleDown/>
                </button>
            </div>
        </article>
    )
}


export default CartItem