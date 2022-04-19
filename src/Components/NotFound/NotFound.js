import React from 'react';
import './NotFound.css'
import notFound from "../../Img/NotFound/404-img.jpg"

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className='img-box'>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;