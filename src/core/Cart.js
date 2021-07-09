import React, {useState, useEffect} from 'react';
import "../styles.css";
import { API } from "../backend";
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';
import StripeCheckout from './StripeCheckout';

const Cart = () => {

    const [products, setproducts] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setproducts(loadCart())
    }, [reload]);

    const loadAllProducts = () => {
        return (
            <div>
                <h2>
                    This Section is to load products
                </h2>
                {products.map((product, index) => (
                    <Card 
                        key={index}
                        product={product}
                        addtoCart = {false}
                        removeFromCart= {true}
                        setReload={setReload}
                        reload={reload}
                    />
                ))}
            </div>
        )
    }

    const loadCheckOut = () => {
       return (
        <div>
            <h2>This section for checkout</h2>
        </div>
       )
    }

    //We used map to repeat that product again and again
    return (
        <Base title="Cart Page" description="Ready to check out">
            <div className="row text-center">
                <div className="col-6">{loadAllProducts()}</div>
                <div className="col-6"><StripeCheckout products={products} setReload={setReload} /></div>
            </div>
        </Base>
    )
}


export default Cart;