import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <Banner></Banner>

            </div>
            <div className="service-section">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;