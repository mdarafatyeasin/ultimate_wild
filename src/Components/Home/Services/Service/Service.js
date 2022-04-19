import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const service = (props) => {
    const { picture, name, description, price } = props.service
    return (
        <div className='service-card'>
            <div className="img">
                <img src={picture} alt="" />
            </div>
            <div className='card-details'>
                <h2>{name}</h2>
                <h4><strong>${price}</strong></h4>
                <p><strong>Description:</strong><br />{description}</p>
                <Link className='booking-button' to="/order">Book Now</Link>
            </div>
        </div>
    );
};

export default service;