import React from 'react';
import { useState, useEffect } from 'react'
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, getServices] = useState([]);

    useEffect(() => {
        const url = 'data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => getServices(data))
    }, [])


    return (
        <div className='services' id='services'>
            {
                services.map(service => <Service key={'id'} service={service}></Service>)
            }
        </div>
    );
};

export default Services;