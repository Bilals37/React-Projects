import React from 'react'
import { useState } from 'react'
import './ContactUs.css'
import { MdEmail, MdPhone, MdLocationCity } from 'react-icons/md'




const ContactUs = () => {

    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        const formData = new FormData(event.target);
        formData.append('access_key', '83236ea1-1920-48dc-be81-4f45195d3c9c');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult('Message Submitted Successfully');
                event.target.reset();
            } else {
                console.error('Error:', data);
                setResult(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setResult('An error occurred. Please try again later.');
        }
        setTimeout(() => {
            setResult('');
        }, 5000);
    };

    return (
        <>
            <div className="container">
                <div className="contactUs">
                    <div className="contacttitel">
                        <h1>Get in Touch</h1>
                    </div>
                    <div className='contact'>
                        <div className="contact-Col">
                            <h3>Send us a Message</h3>
                            <p>Feel free to reach out through contact form or find our contact Information below. Your feedback, questions, and suggestions are important to us as we Strive to provide exceptional service to our community.</p>
                            <ul>
                                <li><p><MdEmail /></p> info@fareats.in</li>
                                <li><p><MdPhone /></p> +91 78542 14586 </li>
                                <li><p><MdLocationCity /></p>Gondhavani Road, Ward No.1, Shrirampur, Maharashtra -413709</li>
                            </ul>
                        </div>

                        <div className="contact-Col">
                            <form onSubmit={onSubmit}>
                                <label>Your Name</label>
                                <input type="text" name='name' placeholder='Enter your Name' required />
                                <label>Mobile Number</label>
                                <input type="number" name='phone' placeholder='Enter your Mobile Number' required />
                                <label>Message</label>
                                <textarea name="message" placeholder='Enter your Message' id="" required></textarea>
                                <button type='submit' className='btn conBtn'>Submit Now</button>
                            </form>
                            <span>{result}</span>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default ContactUs
