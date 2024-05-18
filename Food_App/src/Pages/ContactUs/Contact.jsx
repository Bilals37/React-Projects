import React from 'react'
import ContactUs from '../../Components/Contact/ContactUs'
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ContactUs />
        </>
    )
}

export default Contact
