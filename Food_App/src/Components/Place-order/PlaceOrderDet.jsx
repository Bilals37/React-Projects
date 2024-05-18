import React from 'react'
import './PlaceOrderDet.css'
import { useContext } from 'react';
import { StoreContext } from '../../Context/Context';

const PlaceOrderDet = () => {

    const { getTotalCartAmount } = useContext(StoreContext);
    const totalCartAmount = getTotalCartAmount();
    const deliveryFee = totalCartAmount > 60 && totalCartAmount < 500 ? 40 : 0;

    return (
        <>
            <form className='place-order'>
                <div className="place-left">
                    <p className="titel">Delivery Information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <input type="email" placeholder='E-mail' />
                    <input type="text" placeholder='Street' />
                    <div className="multi-fields">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div className="multi-fields">
                        <input type="number" maxLength={8} placeholder='Zip Code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="number" placeholder='Phone' />
                </div>
                <div className="place-right">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>₹{totalCartAmount.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>₹{deliveryFee.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>₹{(totalCartAmount + deliveryFee).toFixed(2)}</b>
                            </div>
                        </div>
                        <button >PROCEED TO Payment</button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default PlaceOrderDet
