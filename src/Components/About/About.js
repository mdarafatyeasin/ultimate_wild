import React from 'react';
import "./About.css"
import myPhoto from "../../Img/About/myPhoto.png"

const About = () => {
    return (
        <div>
            <div className="about-section">
                <div className="my-img">
                    <img src={myPhoto} alt="" />
                </div>
                <div>
                    <h2><strong>Introduction</strong></h2>
                    <p className='info'>Hello this is Md. <strong>Md.Yeasin Arafat</strong>. <br /> And i am 21 years old. </p>
                </div>
                <div>
                    <h3>Goles</h3>
                    <p className='info'>I want to make beautiful things, even if nobody cares, as opposed to ugly things. That's my intent.I strive for two things in design: simplicity and clarity. Great design is born of those two things.Good design is obvious. Great design is transparent.</p>
                </div>
            </div>
        </div>
    );
};

export default About;