import React from "react";

function CartProduct(props) {
    const title = props.product.product.title
    const price = props.product.product.price
    const amount = props.product.quantity
    return (
        <container>
            <h2>{title}, ${price}, quantity: {amount}</h2>
        </container>
    )
}

export default CartProduct;