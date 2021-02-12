import React from "react";
import Loading from "../components/Loading";

import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, increaseAmount} from "../redux/models/cart.reducer";

function ProductDetails() {
    const dispatch = useDispatch()
    const history = useHistory()
    const {productId} = useParams()

    const products = useSelector(state => state.products.products).flat()
    const product = products.find(item => item.id === parseInt(productId))
    const cart = useSelector(state => state.cart.cart).flat()


    const handleAddToCartClick = () => {
        const {id, image, title, price} = product
        const item = cart.find(item => item.id === id)
        if (item) {
            cart.map(item => item.id === id && dispatch(increaseAmount(item.id)))
        } else {
            const newItem = {id, image, title, price, amount: 1}
            dispatch(addToCart(newItem))
        }
        history.push("/cart")
    }


    if (products.length === 0) {
        return <Loading/>
    }

    return (
        (
            <section className="single-product">
                <img className="single-product-image" src={product.image} alt={product.title}/>
                <article>
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
                    <p>{product.description}</p>
                    <button className="btn btn-primary btn-block" onClick={handleAddToCartClick}>
                        add to cart
                    </button>
                </article>
            </section>
        )
    )
}


export default ProductDetails