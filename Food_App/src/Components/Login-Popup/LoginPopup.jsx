import React, { useState, useEffect } from 'react';
import './LoginPop.css';
import { assets } from '../../Assets/frontend_assets/assetsFront';

const Loginpop = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Login'); // Initialize currentState to 'Login'
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Disable scroll when the component is mounted
        document.body.classList.add('no-scroll');
        // Enable scroll when the component is unmounted
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <>
            <div className="login-popup">
                <form className='login-popup-container' action="">
                    <div className="login-popup-title">
                        <h2>{currentState}</h2>
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                    </div>
                    <div className="login-popup-input">
                        {currentState === 'Sign Up' && <input type="text" placeholder='Your Name' required />}
                        <input type="email" placeholder='Your Email' required />
                        <input type="password" placeholder='Password' required />
                    </div>
                    <button className='btn' type="submit">{currentState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>I agree to terms & conditions of use & Privacy Policy</p>
                    </div>
                    {currentState === 'Login' ? (
                        <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Sign Up</span></p>
                    ) : (
                        <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login</span></p>
                    )}
                </form>
            </div>
        </>
    );
};

export default Loginpop;
