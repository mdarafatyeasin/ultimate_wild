import React from 'react';
import { useState, useEffect } from 'react'
import Service from '../Service/Service';

const Services = () => {
    const [services, getServices] = useState([]);

    useEffect(() => {
        const url = 'data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => getServices(data))
    }, [])


    return (
        <div id='services'>
            {
                services.map(service => <Service key={'id'} service={service}></Service>)
            }
        </div>
    );
};

export default Services;