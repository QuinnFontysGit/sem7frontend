import React, {useEffect, useState} from "react";
import axios from "axios";
import Product from '../../components/Product/Product.js'
import Cookies from "js-cookie";

function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const userId = Cookies.get('userid')
        if(!userId){
            console.error('user not logged in, can not fetch cart');
            return
        }

        axios.get('https://localhost:8000/carts/' + userId + '/')
            .then(response => {
                setCart(response.data.results);
                console.log(response.data);
            })
            .catch(error=>{
                console.error("Could not fetch product data:\n", error)
            })
    }, []);

    return (
        <div>
            cart items:
            <div className="productlist">
                {cart.map(product =>(
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CartPage;