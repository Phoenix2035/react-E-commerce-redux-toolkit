import React from "react";

import {useParams} from "react-router-dom";

function ProductDetails() {
    const {id} = useParams()

    return (
        <h1>hello from product details page {id}</h1>
    )
}


export default ProductDetails