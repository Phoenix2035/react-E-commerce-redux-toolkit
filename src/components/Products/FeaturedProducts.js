import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductList from "./ProductList";
import Loading from "../Loading";
import {getProductsAsync} from "../../redux/models/products.reducer";
import Url from "../../utils/Url";

function FeaturedProducts() {
    const dispatch = useDispatch()
    const featured = useSelector(state => state.products.featured)
    const loading = useSelector(state => state.products.loading)


    useEffect(() => {
        if (!featured.length) {
            dispatch(getProductsAsync(Url))
        }
    }, [])

    if (loading) return <Loading/>

    return <ProductList title="featured products" products={featured}/>

}


export default FeaturedProducts