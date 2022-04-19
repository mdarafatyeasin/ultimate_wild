import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className="banner-info">
                    <h1 className='banner-title'> Welcome to <br /> Ultimate Wild</h1>
                    <p className='banner-text'>How glorious a greeting the sun gives the mountains!” “Keep your love of nature, for that is the true way to understand art more and more.</p>
                </div>
                <button className='common-button'>Higher me</button>
            </div>
        </div>
    );
};

export default Banner;