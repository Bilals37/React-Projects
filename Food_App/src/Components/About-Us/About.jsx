import React from 'react'
import './About.css'
import { about_us } from '../../Assets/frontend_assets/assetsFront'

const About = () => {
    return (
        <>

            <div className="aboutus">
                <h1>About Us</h1>
                {about_us.map((data, index) => (
                    <div key={index} className={`info ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="text-content">
                            <h2>{data.titel}</h2>
                            <p>{data.info}</p>
                        </div>
                        <img src={data.img} alt={data.titel} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default About
