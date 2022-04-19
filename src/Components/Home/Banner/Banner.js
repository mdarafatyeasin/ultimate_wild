import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className="banner-info">
                    <h1 className='banner-title'> Welcome to <br /> Ultimate Wild</h1>
                    <p className='banner-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A natus rem harum quae odit repellendus similique quas soluta nesciunt consequatur!</p>
                </div>
                <button className='common-button'>Higher me</button>
            </div>
        </div>
    );
};

export default Banner;