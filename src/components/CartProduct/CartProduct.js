import React from "react";

function CartProduct(props) {
    const {title, price, amount} = props.cartProduct;
    return (
        <container>
            <h2>{title}, ${price}, quantity: {amount}</h2>
        </container>
    )
}

export default CartProduct;