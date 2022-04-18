import React from 'react';

const service = (props) => {
    const {picture, name, description, Price} = props.service
    return (
        <div>
            <h1>This is service {name}</h1>
        </div>
    );
};

export default service;