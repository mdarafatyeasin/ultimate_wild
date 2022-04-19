import React from 'react';
import animal2 from "../../../Img/Banner/animal2.png"
import "./KnowMore.css"

const KnowMore = () => {
    return (
        <div className='know-more-container'>
            <div className="km-img">
                <img src={animal2} alt="" />
            </div>
            <div className="text">
                <h2>Know More</h2>
                <p>
                    Keep your love of nature, for that is the true way to understand art more and more. When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.Nature never goes out of style.
                </p>

            </div>
        </div>
    );
};

export default KnowMore;