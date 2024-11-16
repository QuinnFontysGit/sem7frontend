import React from "react";

function Product(props) {
    const {title, price} = props.product;
    return (
        <container>
            <h2>{title}, ${price}</h2>
        </container>
    )
}

export default Product;