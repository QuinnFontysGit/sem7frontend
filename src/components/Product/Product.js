import React from "react";
import './Product.css';
import Cookies from "js-cookie";

function Product(props) {
    const {title, price, id} = props.product;
    const logged = Cookies.get("loggedIn");
    return (
        <div className="productcontainer">
            <h2>{title}, ${price}</h2>
            {logged ? (<form onSubmit={(e)=>{
                e.preventDefault(); props.addToCart(id);
            }}>
                <button className="addbutton" type="submit">Add 1 to cart</button>
            </form>):(null)}
            
        </div>
    )
}

export default Product;