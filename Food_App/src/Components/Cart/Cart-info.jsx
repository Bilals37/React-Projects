import React, { useContext, useEffect } from 'react';
import './Cart-info.css';
import { StoreContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const CartInfo = () => {
    const { cartItem, food_list, removeCartItem, getTotalCartAmount } = useContext(StoreContext);
    const totalCartAmount = getTotalCartAmount();
    const deliveryFee = totalCartAmount > 60 && totalCartAmount < 500 ? 40 : 0;

    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="cart">
                <h1>Cart Items</h1>
                <div className="cart-items">
                    <div className="cart-items-title">
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {food_list.map((item) => {
                        if (cartItem[item._id] > 0) {
                            return (
                                <div key={item._id}>
                                    <div className="cart-items-title cart-items-item">
                                        <img src={item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                        <p>₹{item.price.toFixed(2)}</p>
                                        <p>{cartItem[item._id]}</p>
                                        <p>₹{(item.price * cartItem[item._id]).toFixed(2)}</p>
                                        <button className="cart-item-remove btn" onClick={() => removeCartItem(item._id)}>Remove</button>
                                        <p className="mob-remo" onClick={() => removeCartItem(item._id)}>X</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="cart-bottom">
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
                        <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cart-promocode">
                        <div>
                            <p>If you have Promo code, Enter it here</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder="Enter Promo Code" maxLength={8} />
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartInfo;
