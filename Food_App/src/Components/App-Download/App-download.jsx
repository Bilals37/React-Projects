import React from 'react'
import './App-download.css'
import { assets } from '../../Assets/frontend_assets/assetsFront'

const Appdownload = () => {
    return (
        <>
            <div className="app-download" id='app-download'>
                <p>For Better Experience Download <br /> Mobile App</p>
                <div className="app-download-platforms">
                    <img src={assets.play_store} alt="" />
                    <img src={assets.app_store} alt="" />
                </div>
            </div>
        </>
    )
}

export default Appdownload
