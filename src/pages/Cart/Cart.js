import React, {useEffect, useState} from "react";
import axios from "axios";
import CartProduct from '../../components/CartProduct/CartProduct'
import Cookies from "js-cookie";

function CartPage() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            const userId = Cookies.get('userid');
            if (!userId) {
                console.error('User not logged in, cannot fetch cart');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('https://localhost:8000/carts/' + userId + '/');
                setCart(response.data.products);
                console.log(response.data)
            } catch (error) {
                console.error("Could not fetch product data:\n", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchCart(); 
    }, []);

    if (loading){
        return <div>Loading cart...</div>
    }

    return (
        <div>
            cart items:
            <div className="productlist">
                {cart.map(product =>(
                    <CartProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CartPage;