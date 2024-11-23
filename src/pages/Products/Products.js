import React, {useEffect, useState} from "react";
import axios from "axios";
import Product from '../../components/Product/Product.js';
import api from '../../api/axios.js';
import Cookies from "js-cookie";

function ProductsPage() {
    const [products, setProducts] = useState([]);

    const addToCart = async (productid) => {
        const csrfToken = Cookies.get('csrftoken');
        if (!csrfToken) {
            console.error('CSRF token not found.');
            return
        }
        try {
            const amount = 1;
            await api.post("/addtocart/", { productid, amount },
                {headers: {'X-CSRFToken': csrfToken, }})
            .then(response =>{
                console.log(response);
            })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        axios.get('https://localhost:8000/products/')
            .then(response => {
                setProducts(response.data.results);
            })
            .catch(error=>{
                console.error("Could not fetch product data:\n", error)
            })
    }, []);

    return (
        <div>
            products:
            <div className="productlist">
                {products.map(product =>(
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default ProductsPage;