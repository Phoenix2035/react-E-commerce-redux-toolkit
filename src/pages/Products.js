import React, { useEffect } from "react";
import { getProductsAsync } from "../redux/models/products.reducer"
import { useDispatch, useSelector } from "react-redux";
import Url from "../utils/Url";

function Products() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products).flat()
    console.log(products)



    useEffect(() => {
        if (!products.length) {
            dispatch(getProductsAsync(Url))
        }
    }, [])


    return (
        <div>
            {
                products && products.map((item, i) => <div key={i}>{item.title}</div>)
            }
        </div>
    )
}

export default Products