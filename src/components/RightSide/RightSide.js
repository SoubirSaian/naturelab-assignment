import React from 'react';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className='right-side'>
            <div className='right-top'>
                <button>Avalance</button>
                <span>0XF6...1353</span>
            </div>
            <h6>Custom Link </h6>
            <p>https://testnetxyzxyz/trade?ref=</p>
            <input className='input-box' type="text" placeholder='ENTER' />
            <div className='bottom-button'>
                <button className='custom-link'>Custom link</button>
                <button className='cancel-btn'>Cancel</button>
            </div>
        </div>
    );
};

export default RightSide;