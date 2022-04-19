import React from 'react';
import order from "../../Img/Order/order.png"
import "./Order.css"

const Order = () => {
    return (
        <div className="order-component">
            <div className='order-placed'>
                <img src={order} alt="" />
            </div>
            <div className='order-text'>
                <h1>
                    <strong >Order placed!!</strong>
                </h1>
            </div>
        </div>
    );
};

export default Order;