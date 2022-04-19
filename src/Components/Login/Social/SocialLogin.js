import React from 'react';
import "./SocilaLogin.css"

const SocialLogin = () => {
    return (
        <div>
            <div className='divider-component'>
                <div className='divider'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='divider'></div>
            </div>
            <div className='social-container'>
                <button className='social-signin-button'>Google sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;