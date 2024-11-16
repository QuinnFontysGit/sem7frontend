import React, {useEffect, useState} from "react";
import axios from "axios";
import Product from '../../components/Product/Product.js'

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/products/')
            .then(response => {
                setProducts(response.data.results);
                console.log(response.data);
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
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductsPage;