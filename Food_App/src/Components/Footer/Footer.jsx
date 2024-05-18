import React from 'react'
import './Footer.css';
import { assets } from '../../Assets/frontend_assets/assetsFront'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className='footer' id='footer'>
                <hr />
                <div className="footer-con">

                    <div className="left">
                        <img src={assets.logo} alt="" />
                        <p>At FarEats, we are passionate about bringing the best local cuisine directly to your door. Our mission is to make delicious, high-quality food accessible and convenient for everyone. We partner with the finest local restaurants to ensure every meal we deliver is fresh, flavorful, and crafted with care.</p>
                        <div className="footer-social-icon">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>
                    <div className="center">
                        <h2>Quick Links</h2>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </div>
                    <div className="right">
                        <h2>Get in Touch</h2>
                        <ul>
                            <li>+91 78542 14586</li>
                            <li>info@fareats.in</li>
                            <Link to='/contact'><button className='btn conBtn'>Contact Us</button></Link>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-copyRight">© 2024 FarEats. All Rights Reserved. Terms of Service | Privacy Policy</p>
            </div>
        </>

    )
}

export default Footer
