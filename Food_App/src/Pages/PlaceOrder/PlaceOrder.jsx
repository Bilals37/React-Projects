import React from 'react'
import { useEffect } from 'react';
import PlaceOrderDet from '../../Components/Place-order/PlaceOrderDet';

const PlaceOrder = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PlaceOrderDet />
        </>
    )
}

export default PlaceOrder;
