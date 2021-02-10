import React, {useEffect} from "react";
import {getProductsAsync} from "../redux/models/products.reducer"
import {useDispatch, useSelector} from "react-redux";
import Url from "../utils/Url";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

function Products() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products).flat()
    const loading = useSelector(state => state.products.loading)


    useEffect(() => {
        if (!products.length) {
            dispatch(getProductsAsync(Url))
        }
    }, [])

    if (loading) return <Loading/>

    return <ProductList title="our products" products={products}/>

}

export default Products