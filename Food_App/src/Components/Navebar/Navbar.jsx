import React, { useContext, useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { assets } from '../../Assets/frontend_assets/assetsFront';
import { Link } from 'react-router-dom'; //useLocation  
import { StoreContext } from '../../Context/Context';
import { MdMenu } from 'react-icons/md';

const Navbar = ({ setShowLogin }) => {
    const { cartItem } = useContext(StoreContext);
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const totalItems = Object.values(cartItem).reduce((acc, quantity) => acc + quantity, 0);

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    const [mobileMenu, setMobileMenu] = useState(false);
    // const location = useLocation();
    const navbarRef = useRef(null);

    // useEffect(() => {
    //     // Extract the current path from the location object
    //     const path = location.pathname;

    //     // Update the menu state based on the current path
    //     if (path === '/') {
    //         setMenu('home');
    //     } else if (path === '/about') {
    //         setMenu('about');
    //     } else if (path === '/product') {
    //         setMenu('products');
    //     } else if (path === '/gallery') {
    //         setMenu('gallery');
    //     } else if (path === '/layout') {
    //         setMenu('layout');
    //     } else if (path === '/contact') {
    //         setMenu('contact');
    //     }
    // }, [location]);

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);
        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            // Click detected outside the navbar, close the mobile menu
            setMobileMenu(false);
        }
    };

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleMenuItemClick = () => {
        setMobileMenu(false); // Hide the mobile menu when a menu item is clicked
    };

    return (
        <div className="navbar-wrapper">
            <div ref={navbarRef} className="navbar">
                <Link to='/' onClick={() => handleMenuItemClick()}> <img className='logo' src={assets.logo} alt="" /></Link>
                <ul className={`navbar-menu ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
                    <Link to='/'><li onClick={() => handleMenuItemClick()}> Home</li></Link>
                    <a href='#explore-menu'><li onClick={() => handleMenuItemClick()}>Menu</li></a>
                    {/* <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        About Us
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleMenuItemClick()}><Link to="/our-story">Our Story</Link></li>
                                <li onClick={() => handleMenuItemClick()}><Link to="/mission">Mission</Link></li>
                                <li onClick={() => handleMenuItemClick()}><Link to="/patners">Our Patners</Link></li>
                                <li onClick={() => handleMenuItemClick()}><Link to="/team">Team</Link></li>
                                <li onClick={() => handleMenuItemClick()}><Link to="/careers">Careers</Link></li>
                            </ul>
                        )}
                    </li> */}
                    <Link to='/aboutus'><li onClick={() => handleMenuItemClick()}>About Us </li></Link>
                    <Link to='/contact'><li onClick={() => handleMenuItemClick()}>Contact Us</li></Link>
                    <button onClick={() => { handleMenuItemClick(); setShowLogin(true); }} className='btn mobileview'>Sign in</button>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="search-icon">
                        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                        <div className="dot">{totalItems}</div>
                    </div>
                    <button className='btn signBtn' onClick={() => setShowLogin(true)}>Sign in</button>
                    <MdMenu className='menu-icon' onClick={toggleMenu} />
                </div>

            </div>
        </div>
    );
};

export default Navbar;
