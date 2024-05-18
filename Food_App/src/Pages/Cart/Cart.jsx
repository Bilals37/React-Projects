import React from 'react'
import CartInfo from '../../Components/Cart/Cart-info'
import { useEffect } from 'react';

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <CartInfo />
        </div>
    )
}

export default Cart
