import React from "react";
import Loading from "../components/Loading";

import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/models/cart.reducer";

function ProductDetails() {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    const products = useSelector(state => state.products.products).flat()
    const product = products.find(item => item.id === parseInt(id))



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
                    <button className="btn btn-primary btn-block" onClick={() => {
                        dispatch(addToCart(product))
                        history.push("/cart")
                    }}>add to cart
                    </button>
                </article>
            </section>
        )
    )
}


export default ProductDetails