import React from 'react';
import Banner from '../Banner/Banner';
import KnowMore from '../KnoMore/KnowMore';
import Services from '../Services/Services/Services';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <Banner></Banner>

            </div>
            <div className="service-section">
                <h1 className='Services-title'>SERVICES</h1>
                <Services></Services>
            </div>
            <div>
                <KnowMore></KnowMore>
            </div>
        </div>
    );
};

export default Home;